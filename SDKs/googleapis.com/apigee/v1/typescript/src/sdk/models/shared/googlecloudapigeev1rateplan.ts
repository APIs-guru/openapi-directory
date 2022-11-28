import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1RateRange } from "./googlecloudapigeev1raterange";
import { GoogleTypeMoney } from "./googletypemoney";
import { GoogleCloudApigeeV1RevenueShareRange } from "./googlecloudapigeev1revenuesharerange";


export enum GoogleCloudApigeeV1RatePlanBillingPeriodEnum {
    BillingPeriodUnspecified = "BILLING_PERIOD_UNSPECIFIED",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY"
}

export enum GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum {
    ConsumptionPricingTypeUnspecified = "CONSUMPTION_PRICING_TYPE_UNSPECIFIED",
    FixedPerUnit = "FIXED_PER_UNIT",
    Banded = "BANDED",
    Tiered = "TIERED",
    Stairstep = "STAIRSTEP"
}

export enum GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum {
    PaymentFundingModelUnspecified = "PAYMENT_FUNDING_MODEL_UNSPECIFIED",
    Prepaid = "PREPAID",
    Postpaid = "POSTPAID"
}

export enum GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum {
    RevenueShareTypeUnspecified = "REVENUE_SHARE_TYPE_UNSPECIFIED",
    Fixed = "FIXED",
    VolumeBanded = "VOLUME_BANDED"
}

export enum GoogleCloudApigeeV1RatePlanStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Published = "PUBLISHED"
}


// GoogleCloudApigeeV1RatePlan
/** 
 * Rate plan details.
**/
export class GoogleCloudApigeeV1RatePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiproduct" })
  apiproduct?: string;

  @SpeakeasyMetadata({ data: "json, name=billingPeriod" })
  billingPeriod?: GoogleCloudApigeeV1RatePlanBillingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=consumptionPricingRates", elemType: GoogleCloudApigeeV1RateRange })
  consumptionPricingRates?: GoogleCloudApigeeV1RateRange[];

  @SpeakeasyMetadata({ data: "json, name=consumptionPricingType" })
  consumptionPricingType?: GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedFeeFrequency" })
  fixedFeeFrequency?: number;

  @SpeakeasyMetadata({ data: "json, name=fixedRecurringFee" })
  fixedRecurringFee?: GoogleTypeMoney;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentFundingModel" })
  paymentFundingModel?: GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum;

  @SpeakeasyMetadata({ data: "json, name=revenueShareRates", elemType: GoogleCloudApigeeV1RevenueShareRange })
  revenueShareRates?: GoogleCloudApigeeV1RevenueShareRange[];

  @SpeakeasyMetadata({ data: "json, name=revenueShareType" })
  revenueShareType?: GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=setupFee" })
  setupFee?: GoogleTypeMoney;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1RatePlanStateEnum;
}


// GoogleCloudApigeeV1RatePlanInput
/** 
 * Rate plan details.
**/
export class GoogleCloudApigeeV1RatePlanInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiproduct" })
  apiproduct?: string;

  @SpeakeasyMetadata({ data: "json, name=billingPeriod" })
  billingPeriod?: GoogleCloudApigeeV1RatePlanBillingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=consumptionPricingRates", elemType: GoogleCloudApigeeV1RateRange })
  consumptionPricingRates?: GoogleCloudApigeeV1RateRange[];

  @SpeakeasyMetadata({ data: "json, name=consumptionPricingType" })
  consumptionPricingType?: GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedFeeFrequency" })
  fixedFeeFrequency?: number;

  @SpeakeasyMetadata({ data: "json, name=fixedRecurringFee" })
  fixedRecurringFee?: GoogleTypeMoney;

  @SpeakeasyMetadata({ data: "json, name=paymentFundingModel" })
  paymentFundingModel?: GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum;

  @SpeakeasyMetadata({ data: "json, name=revenueShareRates", elemType: GoogleCloudApigeeV1RevenueShareRange })
  revenueShareRates?: GoogleCloudApigeeV1RevenueShareRange[];

  @SpeakeasyMetadata({ data: "json, name=revenueShareType" })
  revenueShareType?: GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=setupFee" })
  setupFee?: GoogleTypeMoney;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1RatePlanStateEnum;
}
