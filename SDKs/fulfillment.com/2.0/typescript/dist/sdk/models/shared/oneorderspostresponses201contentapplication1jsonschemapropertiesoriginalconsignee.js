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
import { OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy } from "./onereturnsgetresponses200contentapplication1jsonschemapropertiesdataitemspropertiesupdatedby";
var OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2 = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso2" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2.prototype, "iso2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2.prototype, "name", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2 };
var OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLocality" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "addressLocality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressRegion" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "addressRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso" }),
        __metadata("design:type", OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "iso", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedBy" }),
        __metadata("design:type", OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy)
    ], OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee.prototype, "updatedBy", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee };
