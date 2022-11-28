import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BtPlanListItemIntervalEnum {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    None = "none"
}
export declare class BtPlanListItem extends SpeakeasyBase {
    amount?: number;
    ctaText: string;
    currency: string;
    description: string;
    ees07PlanDescription?: string;
    ees07PlanTitle?: string;
    ees07Title?: string;
    headerText: string;
    heroText: string;
    id: string;
    interval?: BtPlanListItemIntervalEnum;
    intervalCount?: number;
    longText: string;
    nickname: string;
    noThanksText?: string;
    product: string;
    switchingText?: string;
    termsAndConditionsItunes?: string;
    termsAndConditionsStripe?: string;
    trialPeriodDays: number;
}
