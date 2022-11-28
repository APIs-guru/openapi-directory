import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RokuPlanListItemIntervalEnum {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    None = "none"
}
export declare class RokuPlanListItem extends SpeakeasyBase {
    amount: number;
    currency: string;
    description: string;
    interval: RokuPlanListItemIntervalEnum;
    intervalCount: number;
    nickname: string;
    product: string;
    productCode: string;
    savingLabel: string;
    trialPeriodDays: number;
}
