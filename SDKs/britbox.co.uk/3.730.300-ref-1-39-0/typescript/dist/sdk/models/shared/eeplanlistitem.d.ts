import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EePlanListItemIntervalEnum {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    None = "none"
}
export declare class EePlanListItem extends SpeakeasyBase {
    amount?: number;
    ctaText: string;
    currency: string;
    description: string;
    headerText: string;
    heroText: string;
    id: string;
    interval?: EePlanListItemIntervalEnum;
    intervalCount?: number;
    longText: string;
    nickname: string;
    product: string;
    trialPeriodDays: number;
}
