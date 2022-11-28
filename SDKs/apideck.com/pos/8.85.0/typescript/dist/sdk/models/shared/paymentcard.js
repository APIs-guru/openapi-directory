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
import { Address } from "./address";
export var PaymentCardCardBrandEnum;
(function (PaymentCardCardBrandEnum) {
    PaymentCardCardBrandEnum["Visa"] = "visa";
    PaymentCardCardBrandEnum["Mastercard"] = "mastercard";
    PaymentCardCardBrandEnum["Amex"] = "amex";
    PaymentCardCardBrandEnum["Discover"] = "discover";
    PaymentCardCardBrandEnum["DiscoverDiners"] = "discover-diners";
    PaymentCardCardBrandEnum["Jcb"] = "jcb";
    PaymentCardCardBrandEnum["ChinaUnionpay"] = "china-unionpay";
    PaymentCardCardBrandEnum["SquareGiftCard"] = "square-gift-card";
    PaymentCardCardBrandEnum["SquareCapitalCard"] = "square-capital-card";
    PaymentCardCardBrandEnum["Interac"] = "interac";
    PaymentCardCardBrandEnum["Eftpos"] = "eftpos";
    PaymentCardCardBrandEnum["Felica"] = "felica";
    PaymentCardCardBrandEnum["Ebt"] = "ebt";
    PaymentCardCardBrandEnum["Other"] = "other";
})(PaymentCardCardBrandEnum || (PaymentCardCardBrandEnum = {}));
export var PaymentCardCardTypeEnum;
(function (PaymentCardCardTypeEnum) {
    PaymentCardCardTypeEnum["Credit"] = "credit";
    PaymentCardCardTypeEnum["Debit"] = "debit";
    PaymentCardCardTypeEnum["Prepaid"] = "prepaid";
    PaymentCardCardTypeEnum["Other"] = "other";
})(PaymentCardCardTypeEnum || (PaymentCardCardTypeEnum = {}));
export var PaymentCardPrepaidTypeEnum;
(function (PaymentCardPrepaidTypeEnum) {
    PaymentCardPrepaidTypeEnum["NonPrepaid"] = "non-prepaid";
    PaymentCardPrepaidTypeEnum["Prepaid"] = "prepaid";
    PaymentCardPrepaidTypeEnum["Unknown"] = "unknown";
})(PaymentCardPrepaidTypeEnum || (PaymentCardPrepaidTypeEnum = {}));
// PaymentCard
/**
 * A card's non-confidential details.
**/
var PaymentCard = /** @class */ (function (_super) {
    __extends(PaymentCard, _super);
    function PaymentCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billing_address" }),
        __metadata("design:type", Address)
    ], PaymentCard.prototype, "billingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bin" }),
        __metadata("design:type", String)
    ], PaymentCard.prototype, "bin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_brand" }),
        __metadata("design:type", String)
    ], PaymentCard.prototype, "cardBrand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_type" }),
        __metadata("design:type", String)
    ], PaymentCard.prototype, "cardType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardholder_name" }),
        __metadata("design:type", String)
    ], PaymentCard.prototype, "cardholderName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_id" }),
        __metadata("design:type", String)
    ], PaymentCard.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], PaymentCard.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exp_month" }),
        __metadata("design:type", Number)
    ], PaymentCard.prototype, "expMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exp_year" }),
        __metadata("design:type", Number)
    ], PaymentCard.prototype, "expYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], PaymentCard.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PaymentCard.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_4" }),
        __metadata("design:type", String)
    ], PaymentCard.prototype, "last4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchant_id" }),
        __metadata("design:type", String)
    ], PaymentCard.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prepaid_type" }),
        __metadata("design:type", String)
    ], PaymentCard.prototype, "prepaidType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference_id" }),
        __metadata("design:type", String)
    ], PaymentCard.prototype, "referenceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], PaymentCard.prototype, "version", void 0);
    return PaymentCard;
}(SpeakeasyBase));
export { PaymentCard };
// PaymentCardInput
/**
 * A card's non-confidential details.
**/
var PaymentCardInput = /** @class */ (function (_super) {
    __extends(PaymentCardInput, _super);
    function PaymentCardInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billing_address" }),
        __metadata("design:type", Address)
    ], PaymentCardInput.prototype, "billingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bin" }),
        __metadata("design:type", String)
    ], PaymentCardInput.prototype, "bin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_brand" }),
        __metadata("design:type", String)
    ], PaymentCardInput.prototype, "cardBrand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_type" }),
        __metadata("design:type", String)
    ], PaymentCardInput.prototype, "cardType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardholder_name" }),
        __metadata("design:type", String)
    ], PaymentCardInput.prototype, "cardholderName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_id" }),
        __metadata("design:type", String)
    ], PaymentCardInput.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], PaymentCardInput.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exp_month" }),
        __metadata("design:type", Number)
    ], PaymentCardInput.prototype, "expMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exp_year" }),
        __metadata("design:type", Number)
    ], PaymentCardInput.prototype, "expYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], PaymentCardInput.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_4" }),
        __metadata("design:type", String)
    ], PaymentCardInput.prototype, "last4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchant_id" }),
        __metadata("design:type", String)
    ], PaymentCardInput.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prepaid_type" }),
        __metadata("design:type", String)
    ], PaymentCardInput.prototype, "prepaidType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference_id" }),
        __metadata("design:type", String)
    ], PaymentCardInput.prototype, "referenceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], PaymentCardInput.prototype, "version", void 0);
    return PaymentCardInput;
}(SpeakeasyBase));
export { PaymentCardInput };
