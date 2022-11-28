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
import { OrderAttachmentApiModel } from "./orderattachmentapimodel";
import { OrderItemApiModel } from "./orderitemapimodel";
import { OrderBillingDetailsApiModel } from "./orderbillingdetailsapimodel";
import { OrderShippingDetailsApiModel } from "./ordershippingdetailsapimodel";
export var OrderCreateApiModelStatusEnum;
(function (OrderCreateApiModelStatusEnum) {
    OrderCreateApiModelStatusEnum["PendingPayment"] = "PendingPayment";
    OrderCreateApiModelStatusEnum["Processing"] = "Processing";
    OrderCreateApiModelStatusEnum["Shipped"] = "Shipped";
    OrderCreateApiModelStatusEnum["Completed"] = "Completed";
    OrderCreateApiModelStatusEnum["OnHold"] = "OnHold";
    OrderCreateApiModelStatusEnum["Cancelled"] = "Cancelled";
    OrderCreateApiModelStatusEnum["Refunded"] = "Refunded";
    OrderCreateApiModelStatusEnum["Failed"] = "Failed";
})(OrderCreateApiModelStatusEnum || (OrderCreateApiModelStatusEnum = {}));
var OrderCreateApiModel = /** @class */ (function (_super) {
    __extends(OrderCreateApiModel, _super);
    function OrderCreateApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AfterPaymentDescription" }),
        __metadata("design:type", String)
    ], OrderCreateApiModel.prototype, "afterPaymentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attachments", elemType: OrderAttachmentApiModel }),
        __metadata("design:type", Array)
    ], OrderCreateApiModel.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CouponCode" }),
        __metadata("design:type", String)
    ], OrderCreateApiModel.prototype, "couponCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyId" }),
        __metadata("design:type", Number)
    ], OrderCreateApiModel.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], OrderCreateApiModel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DiscountAmount" }),
        __metadata("design:type", Number)
    ], OrderCreateApiModel.prototype, "discountAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Items", elemType: OrderItemApiModel }),
        __metadata("design:type", Array)
    ], OrderCreateApiModel.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], OrderCreateApiModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Note" }),
        __metadata("design:type", String)
    ], OrderCreateApiModel.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderBillingDetails" }),
        __metadata("design:type", OrderBillingDetailsApiModel)
    ], OrderCreateApiModel.prototype, "orderBillingDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderShippingDetails" }),
        __metadata("design:type", OrderShippingDetailsApiModel)
    ], OrderCreateApiModel.prototype, "orderShippingDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductId" }),
        __metadata("design:type", Number)
    ], OrderCreateApiModel.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Referral" }),
        __metadata("design:type", String)
    ], OrderCreateApiModel.prototype, "referral", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingAmount" }),
        __metadata("design:type", Number)
    ], OrderCreateApiModel.prototype, "shippingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingDescription" }),
        __metadata("design:type", String)
    ], OrderCreateApiModel.prototype, "shippingDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], OrderCreateApiModel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubTotalAmount" }),
        __metadata("design:type", Number)
    ], OrderCreateApiModel.prototype, "subTotalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxAmount" }),
        __metadata("design:type", Number)
    ], OrderCreateApiModel.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalAmount" }),
        __metadata("design:type", Number)
    ], OrderCreateApiModel.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WhatHappensNextDescription" }),
        __metadata("design:type", String)
    ], OrderCreateApiModel.prototype, "whatHappensNextDescription", void 0);
    return OrderCreateApiModel;
}(SpeakeasyBase));
export { OrderCreateApiModel };
