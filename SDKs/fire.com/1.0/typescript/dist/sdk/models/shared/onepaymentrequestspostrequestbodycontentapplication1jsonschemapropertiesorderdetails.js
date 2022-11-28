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
var OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails = /** @class */ (function (_super) {
    __extends(OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails, _super);
    function OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment1" }),
        __metadata("design:type", String)
    ], OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails.prototype, "comment1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment2" }),
        __metadata("design:type", String)
    ], OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails.prototype, "comment2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerNumber" }),
        __metadata("design:type", String)
    ], OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails.prototype, "customerNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryAddressLine1" }),
        __metadata("design:type", String)
    ], OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails.prototype, "deliveryAddressLine1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryAddressLine2" }),
        __metadata("design:type", String)
    ], OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails.prototype, "deliveryAddressLine2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryCity" }),
        __metadata("design:type", String)
    ], OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails.prototype, "deliveryCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryCountry" }),
        __metadata("design:type", String)
    ], OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails.prototype, "deliveryCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryPostCode" }),
        __metadata("design:type", String)
    ], OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails.prototype, "deliveryPostCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantCustomerIdentification" }),
        __metadata("design:type", String)
    ], OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails.prototype, "merchantCustomerIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNumber" }),
        __metadata("design:type", String)
    ], OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails.prototype, "merchantNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variableReference" }),
        __metadata("design:type", String)
    ], OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails.prototype, "variableReference", void 0);
    return OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails;
}(SpeakeasyBase));
export { OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails };
