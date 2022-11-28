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
// OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult
/**
 * The outcome of the attempted transaction.
**/
var OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult = /** @class */ (function (_super) {
    __extends(OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult, _super);
    function OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult.prototype, "message", void 0);
    return OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult;
}(SpeakeasyBase));
export { OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult };
export var OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum;
(function (OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum) {
    OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum["Submitted"] = "SUBMITTED";
    OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum["Removed"] = "REMOVED";
    OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum["Succeeded"] = "SUCCEEDED";
    OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum["Failed"] = "FAILED";
})(OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum || (OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum = {}));
var OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem = /** @class */ (function (_super) {
    __extends(OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem, _super);
    function OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountAfterCharges" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem.prototype, "amountAfterCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchItemUuid" }),
        __metadata("design:type", String)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem.prototype, "batchItemUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", Date)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feeAmount" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icanFrom" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem.prototype, "icanFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icanTo" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem.prototype, "icanTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refId" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem.prototype, "refId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxAmount" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem.prototype, "taxAmount", void 0);
    return OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem;
}(SpeakeasyBase));
export { OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem };
var OnebatchesGetResponses200ContentApplication1jsonSchema = /** @class */ (function (_super) {
    __extends(OnebatchesGetResponses200ContentApplication1jsonSchema, _super);
    function OnebatchesGetResponses200ContentApplication1jsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem }),
        __metadata("design:type", Array)
    ], OnebatchesGetResponses200ContentApplication1jsonSchema.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnebatchesGetResponses200ContentApplication1jsonSchema.prototype, "total", void 0);
    return OnebatchesGetResponses200ContentApplication1jsonSchema;
}(SpeakeasyBase));
export { OnebatchesGetResponses200ContentApplication1jsonSchema };
