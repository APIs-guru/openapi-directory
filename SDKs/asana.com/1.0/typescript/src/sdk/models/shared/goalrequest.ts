import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompactInput } from "./usercompact";


export enum GoalRequestMetricUnitEnum {
    None = "none",
    Currency = "currency",
    Percentage = "percentage"
}


export class GoalRequestMetricInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=current_display_value" })
  currentDisplayValue?: string;

  @SpeakeasyMetadata({ data: "json, name=current_number_value" })
  currentNumberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=initial_number_value" })
  initialNumberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=target_number_value" })
  targetNumberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: GoalRequestMetricUnitEnum;
}


export class GoalRequestOwnerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoalRequestTeamInput
/** 
 * *Conditional*. This property is only present when the `workspace` provided is an organization.
**/
export class GoalRequestTeamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum GoalRequestTimePeriodPeriodEnum {
    Fy = "FY",
    H1 = "H1",
    H2 = "H2",
    Q1 = "Q1",
    Q2 = "Q2",
    Q3 = "Q3",
    Q4 = "Q4"
}


export class GoalRequestTimePeriodInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_on" })
  endOn?: string;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: GoalRequestTimePeriodPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=start_on" })
  startOn?: string;
}


export class GoalRequestWorkspaceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GoalRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=due_on" })
  dueOn?: string;

  @SpeakeasyMetadata({ data: "json, name=followers", elemType: UserCompactInput })
  followers?: UserCompactInput[];

  @SpeakeasyMetadata({ data: "json, name=html_notes" })
  htmlNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=is_workspace_level" })
  isWorkspaceLevel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=liked" })
  liked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: GoalRequestMetricInput;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: GoalRequestOwnerInput;

  @SpeakeasyMetadata({ data: "json, name=start_on" })
  startOn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: GoalRequestTeamInput;

  @SpeakeasyMetadata({ data: "json, name=time_period" })
  timePeriod?: GoalRequestTimePeriodInput;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: GoalRequestWorkspaceInput;
}
