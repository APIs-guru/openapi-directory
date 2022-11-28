import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlanBillingPeriodTypeEnum {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    None = "none"
}

export enum PlanRevenueTypeEnum {
    Tvod = "TVOD",
    Svod = "SVOD"
}

export enum PlanTypeEnum {
    Free = "Free",
    Subscription = "Subscription"
}


export class Plan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "json, name=benefits" })
  benefits: string[];

  @SpeakeasyMetadata({ data: "json, name=billingPeriodFrequency" })
  billingPeriodFrequency: number;

  @SpeakeasyMetadata({ data: "json, name=billingPeriodType" })
  billingPeriodType: PlanBillingPeriodTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=hasTrialPeriod" })
  hasTrialPeriod: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive: boolean;

  @SpeakeasyMetadata({ data: "json, name=isFeatured" })
  isFeatured: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPrivate" })
  isPrivate: boolean;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=revenueType" })
  revenueType: PlanRevenueTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriptionCode" })
  subscriptionCode: string;

  @SpeakeasyMetadata({ data: "json, name=tagline" })
  tagline: string;

  @SpeakeasyMetadata({ data: "json, name=termsAndConditions" })
  termsAndConditions: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=trialPeriodDays" })
  trialPeriodDays: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PlanTypeEnum;
}
