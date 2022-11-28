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
import { SubscriptionCancelSurveyResult } from "./subscriptioncancelsurveyresult";
import { IntroductoryPriceInfo } from "./introductorypriceinfo";
import { SubscriptionPriceChange } from "./subscriptionpricechange";
// SubscriptionPurchase
/**
 * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
**/
var SubscriptionPurchase = /** @class */ (function (_super) {
    __extends(SubscriptionPurchase, _super);
    function SubscriptionPurchase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acknowledgementState" }),
        __metadata("design:type", Number)
    ], SubscriptionPurchase.prototype, "acknowledgementState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoRenewing" }),
        __metadata("design:type", Boolean)
    ], SubscriptionPurchase.prototype, "autoRenewing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoResumeTimeMillis" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "autoResumeTimeMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelReason" }),
        __metadata("design:type", Number)
    ], SubscriptionPurchase.prototype, "cancelReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelSurveyResult" }),
        __metadata("design:type", SubscriptionCancelSurveyResult)
    ], SubscriptionPurchase.prototype, "cancelSurveyResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=developerPayload" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "developerPayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddress" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiryTimeMillis" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "expiryTimeMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalAccountId" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "externalAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "familyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "givenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=introductoryPriceInfo" }),
        __metadata("design:type", IntroductoryPriceInfo)
    ], SubscriptionPurchase.prototype, "introductoryPriceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedPurchaseToken" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "linkedPurchaseToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obfuscatedExternalAccountId" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "obfuscatedExternalAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obfuscatedExternalProfileId" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "obfuscatedExternalProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentState" }),
        __metadata("design:type", Number)
    ], SubscriptionPurchase.prototype, "paymentState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceAmountMicros" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "priceAmountMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceChange" }),
        __metadata("design:type", SubscriptionPriceChange)
    ], SubscriptionPurchase.prototype, "priceChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceCurrencyCode" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "priceCurrencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileId" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileName" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "profileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionCode" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "promotionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionType" }),
        __metadata("design:type", Number)
    ], SubscriptionPurchase.prototype, "promotionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseType" }),
        __metadata("design:type", Number)
    ], SubscriptionPurchase.prototype, "purchaseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTimeMillis" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "startTimeMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userCancellationTimeMillis" }),
        __metadata("design:type", String)
    ], SubscriptionPurchase.prototype, "userCancellationTimeMillis", void 0);
    return SubscriptionPurchase;
}(SpeakeasyBase));
export { SubscriptionPurchase };
