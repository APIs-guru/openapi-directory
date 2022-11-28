import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoalMetricRequestUnitEnum {
    None = "none",
    Currency = "currency",
    Percentage = "percentage"
}
export declare class GoalMetricRequestInput extends SpeakeasyBase {
    currencyCode?: string;
    currentDisplayValue?: string;
    currentNumberValue?: number;
    initialNumberValue?: number;
    precision?: number;
    targetNumberValue?: number;
    unit?: GoalMetricRequestUnitEnum;
}
