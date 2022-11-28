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
import { ProductAttachmentApiModel } from "./productattachmentapimodel";
import { ProductCouponApiModel } from "./productcouponapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { ProductDiscountApiModel } from "./productdiscountapimodel";
import { ProductItemApiModel } from "./productitemapimodel";
import { ProductGatewayApiModel } from "./productgatewayapimodel";
export var ProductFullDetailsApiModelStatusEnum;
(function (ProductFullDetailsApiModelStatusEnum) {
    ProductFullDetailsApiModelStatusEnum["Active"] = "Active";
    ProductFullDetailsApiModelStatusEnum["NotAvailable"] = "NotAvailable";
    ProductFullDetailsApiModelStatusEnum["Inactive"] = "Inactive";
})(ProductFullDetailsApiModelStatusEnum || (ProductFullDetailsApiModelStatusEnum = {}));
var ProductFullDetailsApiModel = /** @class */ (function (_super) {
    __extends(ProductFullDetailsApiModel, _super);
    function ProductFullDetailsApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessToken" }),
        __metadata("design:type", String)
    ], ProductFullDetailsApiModel.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AfterPaymentDescription" }),
        __metadata("design:type", String)
    ], ProductFullDetailsApiModel.prototype, "afterPaymentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attachments", elemType: ProductAttachmentApiModel }),
        __metadata("design:type", Array)
    ], ProductFullDetailsApiModel.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ButtonCallToAction" }),
        __metadata("design:type", String)
    ], ProductFullDetailsApiModel.prototype, "buttonCallToAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Coupons", elemType: ProductCouponApiModel }),
        __metadata("design:type", Array)
    ], ProductFullDetailsApiModel.prototype, "coupons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", CurrencyDetailsApiModel)
    ], ProductFullDetailsApiModel.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyId" }),
        __metadata("design:type", Number)
    ], ProductFullDetailsApiModel.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ProductFullDetailsApiModel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Discounts", elemType: ProductDiscountApiModel }),
        __metadata("design:type", Array)
    ], ProductFullDetailsApiModel.prototype, "discounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], ProductFullDetailsApiModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsFeatured" }),
        __metadata("design:type", Boolean)
    ], ProductFullDetailsApiModel.prototype, "isFeatured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Items", elemType: ProductItemApiModel }),
        __metadata("design:type", Array)
    ], ProductFullDetailsApiModel.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ProductFullDetailsApiModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: ProductGatewayApiModel }),
        __metadata("design:type", Array)
    ], ProductFullDetailsApiModel.prototype, "paymentGateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingAmount" }),
        __metadata("design:type", Number)
    ], ProductFullDetailsApiModel.prototype, "shippingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingDescription" }),
        __metadata("design:type", String)
    ], ProductFullDetailsApiModel.prototype, "shippingDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ProductFullDetailsApiModel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubTotalAmount" }),
        __metadata("design:type", Number)
    ], ProductFullDetailsApiModel.prototype, "subTotalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalAmount" }),
        __metadata("design:type", Number)
    ], ProductFullDetailsApiModel.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalWithShipping" }),
        __metadata("design:type", Number)
    ], ProductFullDetailsApiModel.prototype, "totalWithShipping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WhatHappensNextDescription" }),
        __metadata("design:type", String)
    ], ProductFullDetailsApiModel.prototype, "whatHappensNextDescription", void 0);
    return ProductFullDetailsApiModel;
}(SpeakeasyBase));
export { ProductFullDetailsApiModel };
