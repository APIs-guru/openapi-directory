import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompactInput } from "./usercompact";
export declare enum GoalRequestMetricUnitEnum {
    None = "none",
    Currency = "currency",
    Percentage = "percentage"
}
export declare class GoalRequestMetricInput extends SpeakeasyBase {
    currencyCode?: string;
    currentDisplayValue?: string;
    currentNumberValue?: number;
    initialNumberValue?: number;
    precision?: number;
    targetNumberValue?: number;
    unit?: GoalRequestMetricUnitEnum;
}
export declare class GoalRequestOwnerInput extends SpeakeasyBase {
    name?: string;
}
/**
 * *Conditional*. This property is only present when the `workspace` provided is an organization.
**/
export declare class GoalRequestTeamInput extends SpeakeasyBase {
    name?: string;
}
export declare enum GoalRequestTimePeriodPeriodEnum {
    Fy = "FY",
    H1 = "H1",
    H2 = "H2",
    Q1 = "Q1",
    Q2 = "Q2",
    Q3 = "Q3",
    Q4 = "Q4"
}
export declare class GoalRequestTimePeriodInput extends SpeakeasyBase {
    endOn?: string;
    period?: GoalRequestTimePeriodPeriodEnum;
    startOn?: string;
}
export declare class GoalRequestWorkspaceInput extends SpeakeasyBase {
    name?: string;
}
export declare class GoalRequestInput extends SpeakeasyBase {
    dueOn?: string;
    followers?: UserCompactInput[];
    htmlNotes?: string;
    isWorkspaceLevel?: boolean;
    liked?: boolean;
    metric?: GoalRequestMetricInput;
    name?: string;
    notes?: string;
    owner?: GoalRequestOwnerInput;
    startOn?: string;
    status?: string;
    team?: GoalRequestTeamInput;
    timePeriod?: GoalRequestTimePeriodInput;
    workspace?: GoalRequestWorkspaceInput;
}
