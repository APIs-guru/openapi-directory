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
import { GoogleCloudApigeeV1RateRange } from "./googlecloudapigeev1raterange";
import { GoogleTypeMoney } from "./googletypemoney";
import { GoogleCloudApigeeV1RevenueShareRange } from "./googlecloudapigeev1revenuesharerange";
export var GoogleCloudApigeeV1RatePlanBillingPeriodEnum;
(function (GoogleCloudApigeeV1RatePlanBillingPeriodEnum) {
    GoogleCloudApigeeV1RatePlanBillingPeriodEnum["BillingPeriodUnspecified"] = "BILLING_PERIOD_UNSPECIFIED";
    GoogleCloudApigeeV1RatePlanBillingPeriodEnum["Weekly"] = "WEEKLY";
    GoogleCloudApigeeV1RatePlanBillingPeriodEnum["Monthly"] = "MONTHLY";
})(GoogleCloudApigeeV1RatePlanBillingPeriodEnum || (GoogleCloudApigeeV1RatePlanBillingPeriodEnum = {}));
export var GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum;
(function (GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum) {
    GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum["ConsumptionPricingTypeUnspecified"] = "CONSUMPTION_PRICING_TYPE_UNSPECIFIED";
    GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum["FixedPerUnit"] = "FIXED_PER_UNIT";
    GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum["Banded"] = "BANDED";
    GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum["Tiered"] = "TIERED";
    GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum["Stairstep"] = "STAIRSTEP";
})(GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum || (GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum = {}));
export var GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum;
(function (GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum) {
    GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum["PaymentFundingModelUnspecified"] = "PAYMENT_FUNDING_MODEL_UNSPECIFIED";
    GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum["Prepaid"] = "PREPAID";
    GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum["Postpaid"] = "POSTPAID";
})(GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum || (GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum = {}));
export var GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum;
(function (GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum) {
    GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum["RevenueShareTypeUnspecified"] = "REVENUE_SHARE_TYPE_UNSPECIFIED";
    GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum["Fixed"] = "FIXED";
    GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum["VolumeBanded"] = "VOLUME_BANDED";
})(GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum || (GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum = {}));
export var GoogleCloudApigeeV1RatePlanStateEnum;
(function (GoogleCloudApigeeV1RatePlanStateEnum) {
    GoogleCloudApigeeV1RatePlanStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudApigeeV1RatePlanStateEnum["Draft"] = "DRAFT";
    GoogleCloudApigeeV1RatePlanStateEnum["Published"] = "PUBLISHED";
})(GoogleCloudApigeeV1RatePlanStateEnum || (GoogleCloudApigeeV1RatePlanStateEnum = {}));
// GoogleCloudApigeeV1RatePlan
/**
 * Rate plan details.
**/
var GoogleCloudApigeeV1RatePlan = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1RatePlan, _super);
    function GoogleCloudApigeeV1RatePlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiproduct" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "apiproduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingPeriod" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "billingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumptionPricingRates", elemType: GoogleCloudApigeeV1RateRange }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1RatePlan.prototype, "consumptionPricingRates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumptionPricingType" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "consumptionPricingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedFeeFrequency" }),
        __metadata("design:type", Number)
    ], GoogleCloudApigeeV1RatePlan.prototype, "fixedFeeFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedRecurringFee" }),
        __metadata("design:type", GoogleTypeMoney)
    ], GoogleCloudApigeeV1RatePlan.prototype, "fixedRecurringFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "lastModifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentFundingModel" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "paymentFundingModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revenueShareRates", elemType: GoogleCloudApigeeV1RevenueShareRange }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1RatePlan.prototype, "revenueShareRates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revenueShareType" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "revenueShareType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setupFee" }),
        __metadata("design:type", GoogleTypeMoney)
    ], GoogleCloudApigeeV1RatePlan.prototype, "setupFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlan.prototype, "state", void 0);
    return GoogleCloudApigeeV1RatePlan;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1RatePlan };
// GoogleCloudApigeeV1RatePlanInput
/**
 * Rate plan details.
**/
var GoogleCloudApigeeV1RatePlanInput = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1RatePlanInput, _super);
    function GoogleCloudApigeeV1RatePlanInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiproduct" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "apiproduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingPeriod" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "billingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumptionPricingRates", elemType: GoogleCloudApigeeV1RateRange }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "consumptionPricingRates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumptionPricingType" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "consumptionPricingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedFeeFrequency" }),
        __metadata("design:type", Number)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "fixedFeeFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedRecurringFee" }),
        __metadata("design:type", GoogleTypeMoney)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "fixedRecurringFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentFundingModel" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "paymentFundingModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revenueShareRates", elemType: GoogleCloudApigeeV1RevenueShareRange }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "revenueShareRates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revenueShareType" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "revenueShareType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setupFee" }),
        __metadata("design:type", GoogleTypeMoney)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "setupFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1RatePlanInput.prototype, "state", void 0);
    return GoogleCloudApigeeV1RatePlanInput;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1RatePlanInput };
