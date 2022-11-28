var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
// OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult
/**
 * The outcome of the attempted transaction.
**/
var OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult = /** @class */ (function (_super) {
    __extends(OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult, _super);
    function OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult.prototype, "message", void 0);
    return OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult;
}(SpeakeasyBase));
export { OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult };
export var OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum;
(function (OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum) {
    OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum["Submitted"] = "SUBMITTED";
    OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum["Removed"] = "REMOVED";
    OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum["Succeeded"] = "SUCCEEDED";
    OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum["Failed"] = "FAILED";
})(OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum || (OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum = {}));
var OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems = /** @class */ (function (_super) {
    __extends(OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems, _super);
    function OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountAfterCharges" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.prototype, "amountAfterCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchItemUuid" }),
        __metadata("design:type", String)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.prototype, "batchItemUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", Date)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feeAmount" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icanFrom" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.prototype, "icanFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icanTo" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.prototype, "icanTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refId" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.prototype, "refId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxAmount" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.prototype, "taxAmount", void 0);
    return OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems;
}(SpeakeasyBase));
export { OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems };
