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
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { OrderItemApiModel } from "./orderitemapimodel";
import { OrderBillingDetailsApiModel } from "./orderbillingdetailsapimodel";
import { OrderShippingDetailsApiModel } from "./ordershippingdetailsapimodel";
export var OrderFullDetailsApiModelStatusEnum;
(function (OrderFullDetailsApiModelStatusEnum) {
    OrderFullDetailsApiModelStatusEnum["PendingPayment"] = "PendingPayment";
    OrderFullDetailsApiModelStatusEnum["Processing"] = "Processing";
    OrderFullDetailsApiModelStatusEnum["Shipped"] = "Shipped";
    OrderFullDetailsApiModelStatusEnum["Completed"] = "Completed";
    OrderFullDetailsApiModelStatusEnum["OnHold"] = "OnHold";
    OrderFullDetailsApiModelStatusEnum["Cancelled"] = "Cancelled";
    OrderFullDetailsApiModelStatusEnum["Refunded"] = "Refunded";
    OrderFullDetailsApiModelStatusEnum["Failed"] = "Failed";
})(OrderFullDetailsApiModelStatusEnum || (OrderFullDetailsApiModelStatusEnum = {}));
var OrderFullDetailsApiModel = /** @class */ (function (_super) {
    __extends(OrderFullDetailsApiModel, _super);
    function OrderFullDetailsApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessToken" }),
        __metadata("design:type", String)
    ], OrderFullDetailsApiModel.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AfterPaymentDescription" }),
        __metadata("design:type", String)
    ], OrderFullDetailsApiModel.prototype, "afterPaymentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attachments", elemType: OrderAttachmentApiModel }),
        __metadata("design:type", Array)
    ], OrderFullDetailsApiModel.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CouponCode" }),
        __metadata("design:type", String)
    ], OrderFullDetailsApiModel.prototype, "couponCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", CurrencyDetailsApiModel)
    ], OrderFullDetailsApiModel.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyId" }),
        __metadata("design:type", Number)
    ], OrderFullDetailsApiModel.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], OrderFullDetailsApiModel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DiscountAmount" }),
        __metadata("design:type", Number)
    ], OrderFullDetailsApiModel.prototype, "discountAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], OrderFullDetailsApiModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Items", elemType: OrderItemApiModel }),
        __metadata("design:type", Array)
    ], OrderFullDetailsApiModel.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], OrderFullDetailsApiModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Note" }),
        __metadata("design:type", String)
    ], OrderFullDetailsApiModel.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderBillingDetails" }),
        __metadata("design:type", OrderBillingDetailsApiModel)
    ], OrderFullDetailsApiModel.prototype, "orderBillingDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderShippingDetails" }),
        __metadata("design:type", OrderShippingDetailsApiModel)
    ], OrderFullDetailsApiModel.prototype, "orderShippingDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductId" }),
        __metadata("design:type", Number)
    ], OrderFullDetailsApiModel.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Referral" }),
        __metadata("design:type", String)
    ], OrderFullDetailsApiModel.prototype, "referral", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingAmount" }),
        __metadata("design:type", Number)
    ], OrderFullDetailsApiModel.prototype, "shippingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingDescription" }),
        __metadata("design:type", String)
    ], OrderFullDetailsApiModel.prototype, "shippingDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], OrderFullDetailsApiModel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubTotalAmount" }),
        __metadata("design:type", Number)
    ], OrderFullDetailsApiModel.prototype, "subTotalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxAmount" }),
        __metadata("design:type", Number)
    ], OrderFullDetailsApiModel.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalAmount" }),
        __metadata("design:type", Number)
    ], OrderFullDetailsApiModel.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalWithShipping" }),
        __metadata("design:type", Number)
    ], OrderFullDetailsApiModel.prototype, "totalWithShipping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WhatHappensNextDescription" }),
        __metadata("design:type", String)
    ], OrderFullDetailsApiModel.prototype, "whatHappensNextDescription", void 0);
    return OrderFullDetailsApiModel;
}(SpeakeasyBase));
export { OrderFullDetailsApiModel };
