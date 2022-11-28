import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1RateRange } from "./googlecloudapigeev1raterange";
import { GoogleTypeMoney } from "./googletypemoney";
import { GoogleCloudApigeeV1RevenueShareRange } from "./googlecloudapigeev1revenuesharerange";
export declare enum GoogleCloudApigeeV1RatePlanBillingPeriodEnum {
    BillingPeriodUnspecified = "BILLING_PERIOD_UNSPECIFIED",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY"
}
export declare enum GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum {
    ConsumptionPricingTypeUnspecified = "CONSUMPTION_PRICING_TYPE_UNSPECIFIED",
    FixedPerUnit = "FIXED_PER_UNIT",
    Banded = "BANDED",
    Tiered = "TIERED",
    Stairstep = "STAIRSTEP"
}
export declare enum GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum {
    PaymentFundingModelUnspecified = "PAYMENT_FUNDING_MODEL_UNSPECIFIED",
    Prepaid = "PREPAID",
    Postpaid = "POSTPAID"
}
export declare enum GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum {
    RevenueShareTypeUnspecified = "REVENUE_SHARE_TYPE_UNSPECIFIED",
    Fixed = "FIXED",
    VolumeBanded = "VOLUME_BANDED"
}
export declare enum GoogleCloudApigeeV1RatePlanStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Published = "PUBLISHED"
}
/**
 * Rate plan details.
**/
export declare class GoogleCloudApigeeV1RatePlan extends SpeakeasyBase {
    apiproduct?: string;
    billingPeriod?: GoogleCloudApigeeV1RatePlanBillingPeriodEnum;
    consumptionPricingRates?: GoogleCloudApigeeV1RateRange[];
    consumptionPricingType?: GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum;
    createdAt?: string;
    currencyCode?: string;
    description?: string;
    displayName?: string;
    endTime?: string;
    fixedFeeFrequency?: number;
    fixedRecurringFee?: GoogleTypeMoney;
    lastModifiedAt?: string;
    name?: string;
    paymentFundingModel?: GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum;
    revenueShareRates?: GoogleCloudApigeeV1RevenueShareRange[];
    revenueShareType?: GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum;
    setupFee?: GoogleTypeMoney;
    startTime?: string;
    state?: GoogleCloudApigeeV1RatePlanStateEnum;
}
/**
 * Rate plan details.
**/
export declare class GoogleCloudApigeeV1RatePlanInput extends SpeakeasyBase {
    apiproduct?: string;
    billingPeriod?: GoogleCloudApigeeV1RatePlanBillingPeriodEnum;
    consumptionPricingRates?: GoogleCloudApigeeV1RateRange[];
    consumptionPricingType?: GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum;
    currencyCode?: string;
    description?: string;
    displayName?: string;
    endTime?: string;
    fixedFeeFrequency?: number;
    fixedRecurringFee?: GoogleTypeMoney;
    paymentFundingModel?: GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum;
    revenueShareRates?: GoogleCloudApigeeV1RevenueShareRange[];
    revenueShareType?: GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum;
    setupFee?: GoogleTypeMoney;
    startTime?: string;
    state?: GoogleCloudApigeeV1RatePlanStateEnum;
}
