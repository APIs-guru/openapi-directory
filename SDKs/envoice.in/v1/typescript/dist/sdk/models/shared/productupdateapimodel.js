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
import { ProductDiscountApiModel } from "./productdiscountapimodel";
import { ProductItemApiModel } from "./productitemapimodel";
import { ProductGatewayApiModel } from "./productgatewayapimodel";
export var ProductUpdateApiModelStatusEnum;
(function (ProductUpdateApiModelStatusEnum) {
    ProductUpdateApiModelStatusEnum["Active"] = "Active";
    ProductUpdateApiModelStatusEnum["NotAvailable"] = "NotAvailable";
    ProductUpdateApiModelStatusEnum["Inactive"] = "Inactive";
})(ProductUpdateApiModelStatusEnum || (ProductUpdateApiModelStatusEnum = {}));
var ProductUpdateApiModel = /** @class */ (function (_super) {
    __extends(ProductUpdateApiModel, _super);
    function ProductUpdateApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AfterPaymentDescription" }),
        __metadata("design:type", String)
    ], ProductUpdateApiModel.prototype, "afterPaymentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attachments", elemType: ProductAttachmentApiModel }),
        __metadata("design:type", Array)
    ], ProductUpdateApiModel.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ButtonCallToAction" }),
        __metadata("design:type", String)
    ], ProductUpdateApiModel.prototype, "buttonCallToAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Coupons", elemType: ProductCouponApiModel }),
        __metadata("design:type", Array)
    ], ProductUpdateApiModel.prototype, "coupons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyId" }),
        __metadata("design:type", Number)
    ], ProductUpdateApiModel.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ProductUpdateApiModel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Discounts", elemType: ProductDiscountApiModel }),
        __metadata("design:type", Array)
    ], ProductUpdateApiModel.prototype, "discounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], ProductUpdateApiModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsFeatured" }),
        __metadata("design:type", Boolean)
    ], ProductUpdateApiModel.prototype, "isFeatured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Items", elemType: ProductItemApiModel }),
        __metadata("design:type", Array)
    ], ProductUpdateApiModel.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ProductUpdateApiModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: ProductGatewayApiModel }),
        __metadata("design:type", Array)
    ], ProductUpdateApiModel.prototype, "paymentGateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingAmount" }),
        __metadata("design:type", Number)
    ], ProductUpdateApiModel.prototype, "shippingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingDescription" }),
        __metadata("design:type", String)
    ], ProductUpdateApiModel.prototype, "shippingDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ProductUpdateApiModel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WhatHappensNextDescription" }),
        __metadata("design:type", String)
    ], ProductUpdateApiModel.prototype, "whatHappensNextDescription", void 0);
    return ProductUpdateApiModel;
}(SpeakeasyBase));
export { ProductUpdateApiModel };
