import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlanBillingPeriodTypeEnum {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    None = "none"
}
export declare enum PlanRevenueTypeEnum {
    Tvod = "TVOD",
    Svod = "SVOD"
}
export declare enum PlanTypeEnum {
    Free = "Free",
    Subscription = "Subscription"
}
export declare class Plan extends SpeakeasyBase {
    alias: string;
    benefits: string[];
    billingPeriodFrequency: number;
    billingPeriodType: PlanBillingPeriodTypeEnum;
    currency: string;
    customFields?: Map<string, any>;
    hasTrialPeriod: boolean;
    id: string;
    isActive: boolean;
    isFeatured: boolean;
    isPrivate: boolean;
    price?: number;
    revenueType: PlanRevenueTypeEnum;
    subscriptionCode: string;
    tagline: string;
    termsAndConditions: string;
    title: string;
    trialPeriodDays: number;
    type: PlanTypeEnum;
}
