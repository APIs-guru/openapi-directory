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
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
export var ProductDetailsApiModelStatusEnum;
(function (ProductDetailsApiModelStatusEnum) {
    ProductDetailsApiModelStatusEnum["Active"] = "Active";
    ProductDetailsApiModelStatusEnum["NotAvailable"] = "NotAvailable";
    ProductDetailsApiModelStatusEnum["Inactive"] = "Inactive";
})(ProductDetailsApiModelStatusEnum || (ProductDetailsApiModelStatusEnum = {}));
var ProductDetailsApiModel = /** @class */ (function (_super) {
    __extends(ProductDetailsApiModel, _super);
    function ProductDetailsApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessToken" }),
        __metadata("design:type", String)
    ], ProductDetailsApiModel.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AfterPaymentDescription" }),
        __metadata("design:type", String)
    ], ProductDetailsApiModel.prototype, "afterPaymentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ButtonCallToAction" }),
        __metadata("design:type", String)
    ], ProductDetailsApiModel.prototype, "buttonCallToAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", CurrencyDetailsApiModel)
    ], ProductDetailsApiModel.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyId" }),
        __metadata("design:type", Number)
    ], ProductDetailsApiModel.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ProductDetailsApiModel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], ProductDetailsApiModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsFeatured" }),
        __metadata("design:type", Boolean)
    ], ProductDetailsApiModel.prototype, "isFeatured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ProductDetailsApiModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingAmount" }),
        __metadata("design:type", Number)
    ], ProductDetailsApiModel.prototype, "shippingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingDescription" }),
        __metadata("design:type", String)
    ], ProductDetailsApiModel.prototype, "shippingDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ProductDetailsApiModel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubTotalAmount" }),
        __metadata("design:type", Number)
    ], ProductDetailsApiModel.prototype, "subTotalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalAmount" }),
        __metadata("design:type", Number)
    ], ProductDetailsApiModel.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalWithShipping" }),
        __metadata("design:type", Number)
    ], ProductDetailsApiModel.prototype, "totalWithShipping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WhatHappensNextDescription" }),
        __metadata("design:type", String)
    ], ProductDetailsApiModel.prototype, "whatHappensNextDescription", void 0);
    return ProductDetailsApiModel;
}(SpeakeasyBase));
export { ProductDetailsApiModel };
