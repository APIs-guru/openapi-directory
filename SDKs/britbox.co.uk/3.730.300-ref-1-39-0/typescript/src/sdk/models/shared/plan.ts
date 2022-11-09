import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlanBillingPeriodTypeEnum {
    Day = "day"
,    Week = "week"
,    Month = "month"
,    Year = "year"
,    None = "none"
}

export enum PlanRevenueTypeEnum {
    Tvod = "TVOD"
,    Svod = "SVOD"
}

export enum PlanTypeEnum {
    Free = "Free"
,    Subscription = "Subscription"
}


export class Plan extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias: string;

  @Metadata({ data: "json, name=benefits" })
  benefits: string[];

  @Metadata({ data: "json, name=billingPeriodFrequency" })
  billingPeriodFrequency: number;

  @Metadata({ data: "json, name=billingPeriodType" })
  billingPeriodType: PlanBillingPeriodTypeEnum;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=hasTrialPeriod" })
  hasTrialPeriod: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=isActive" })
  isActive: boolean;

  @Metadata({ data: "json, name=isFeatured" })
  isFeatured: boolean;

  @Metadata({ data: "json, name=isPrivate" })
  isPrivate: boolean;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=revenueType" })
  revenueType: PlanRevenueTypeEnum;

  @Metadata({ data: "json, name=subscriptionCode" })
  subscriptionCode: string;

  @Metadata({ data: "json, name=tagline" })
  tagline: string;

  @Metadata({ data: "json, name=termsAndConditions" })
  termsAndConditions: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=trialPeriodDays" })
  trialPeriodDays: number;

  @Metadata({ data: "json, name=type" })
  type: PlanTypeEnum;
}
