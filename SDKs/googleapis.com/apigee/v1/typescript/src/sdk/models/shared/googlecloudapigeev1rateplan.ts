import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1RateRange } from "./googlecloudapigeev1raterange";
import { GoogleTypeMoney } from "./googletypemoney";
import { GoogleCloudApigeeV1RevenueShareRange } from "./googlecloudapigeev1revenuesharerange";
import { GoogleTypeMoney } from "./googletypemoney";

export enum GoogleCloudApigeeV1RatePlanBillingPeriodEnum {
    BillingPeriodUnspecified = "BILLING_PERIOD_UNSPECIFIED"
,    Weekly = "WEEKLY"
,    Monthly = "MONTHLY"
}

export enum GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum {
    ConsumptionPricingTypeUnspecified = "CONSUMPTION_PRICING_TYPE_UNSPECIFIED"
,    FixedPerUnit = "FIXED_PER_UNIT"
,    Banded = "BANDED"
,    Tiered = "TIERED"
,    Stairstep = "STAIRSTEP"
}

export enum GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum {
    PaymentFundingModelUnspecified = "PAYMENT_FUNDING_MODEL_UNSPECIFIED"
,    Prepaid = "PREPAID"
,    Postpaid = "POSTPAID"
}

export enum GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum {
    RevenueShareTypeUnspecified = "REVENUE_SHARE_TYPE_UNSPECIFIED"
,    Fixed = "FIXED"
,    VolumeBanded = "VOLUME_BANDED"
}

export enum GoogleCloudApigeeV1RatePlanStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Draft = "DRAFT"
,    Published = "PUBLISHED"
}


// GoogleCloudApigeeV1RatePlan
/** 
 * Rate plan details.
**/
export class GoogleCloudApigeeV1RatePlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiproduct" })
  apiproduct?: string;

  @Metadata({ data: "json, name=billingPeriod" })
  billingPeriod?: GoogleCloudApigeeV1RatePlanBillingPeriodEnum;

  @Metadata({ data: "json, name=consumptionPricingRates", elemType: shared.GoogleCloudApigeeV1RateRange })
  consumptionPricingRates?: GoogleCloudApigeeV1RateRange[];

  @Metadata({ data: "json, name=consumptionPricingType" })
  consumptionPricingType?: GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=fixedFeeFrequency" })
  fixedFeeFrequency?: number;

  @Metadata({ data: "json, name=fixedRecurringFee" })
  fixedRecurringFee?: GoogleTypeMoney;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=paymentFundingModel" })
  paymentFundingModel?: GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum;

  @Metadata({ data: "json, name=revenueShareRates", elemType: shared.GoogleCloudApigeeV1RevenueShareRange })
  revenueShareRates?: GoogleCloudApigeeV1RevenueShareRange[];

  @Metadata({ data: "json, name=revenueShareType" })
  revenueShareType?: GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum;

  @Metadata({ data: "json, name=setupFee" })
  setupFee?: GoogleTypeMoney;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1RatePlanStateEnum;
}
