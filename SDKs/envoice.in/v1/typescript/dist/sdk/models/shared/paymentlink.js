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
import { Client } from "./client";
import { Currency } from "./currency";
import { Invoice } from "./invoice";
import { PaymentLinkItem } from "./paymentlinkitem";
import { User } from "./user";
var PaymentLink = /** @class */ (function (_super) {
    __extends(PaymentLink, _super);
    function PaymentLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessToken" }),
        __metadata("design:type", String)
    ], PaymentLink.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Client" }),
        __metadata("design:type", Client)
    ], PaymentLink.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientId" }),
        __metadata("design:type", Number)
    ], PaymentLink.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", Currency)
    ], PaymentLink.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyId" }),
        __metadata("design:type", Number)
    ], PaymentLink.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DiscountAmount" }),
        __metadata("design:type", Number)
    ], PaymentLink.prototype, "discountAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], PaymentLink.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Invoice" }),
        __metadata("design:type", Invoice)
    ], PaymentLink.prototype, "invoice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Items", elemType: PaymentLinkItem }),
        __metadata("design:type", Array)
    ], PaymentLink.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Number" }),
        __metadata("design:type", String)
    ], PaymentLink.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubTotalAmount" }),
        __metadata("design:type", Number)
    ], PaymentLink.prototype, "subTotalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxAmount" }),
        __metadata("design:type", Number)
    ], PaymentLink.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalAmount" }),
        __metadata("design:type", Number)
    ], PaymentLink.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=User" }),
        __metadata("design:type", User)
    ], PaymentLink.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId" }),
        __metadata("design:type", Number)
    ], PaymentLink.prototype, "userId", void 0);
    return PaymentLink;
}(SpeakeasyBase));
export { PaymentLink };
