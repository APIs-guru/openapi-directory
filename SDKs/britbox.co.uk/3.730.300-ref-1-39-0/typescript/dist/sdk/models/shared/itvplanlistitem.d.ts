import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ItvPlanListItemIntervalEnum {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    None = "none"
}
export declare class ItvPlanListItem extends SpeakeasyBase {
    amount: number;
    currency: string;
    description: string;
    id: string;
    interval: ItvPlanListItemIntervalEnum;
    intervalCount: number;
    nickname: string;
    product: string;
    savingLabel?: string;
    switchingText?: string;
    trialPeriodDays?: number;
}
