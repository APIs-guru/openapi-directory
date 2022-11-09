import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserCompact } from "./usercompact";
import { Like } from "./like";

export enum GoalResponseMetricResourceSubtypeEnum {
    Number = "number"
}

export enum GoalResponseMetricUnitEnum {
    None = "none"
,    Currency = "currency"
,    Percentage = "percentage"
}


export class GoalResponseMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @Metadata({ data: "json, name=current_display_value" })
  currentDisplayValue?: string;

  @Metadata({ data: "json, name=current_number_value" })
  currentNumberValue?: number;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=initial_number_value" })
  initialNumberValue?: number;

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: GoalResponseMetricResourceSubtypeEnum;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=target_number_value" })
  targetNumberValue?: number;

  @Metadata({ data: "json, name=unit" })
  unit?: GoalResponseMetricUnitEnum;
}


export class GoalResponseOwner extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// GoalResponseTeam
/** 
 * *Conditional*. This property is only present when the `workspace` provided is an organization.
**/
export class GoalResponseTeam extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}

export enum GoalResponseTimePeriodPeriodEnum {
    Fy = "FY"
,    H1 = "H1"
,    H2 = "H2"
,    Q1 = "Q1"
,    Q2 = "Q2"
,    Q3 = "Q3"
,    Q4 = "Q4"
}


export class GoalResponseTimePeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_on" })
  endOn?: string;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=period" })
  period?: GoalResponseTimePeriodPeriodEnum;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=start_on" })
  startOn?: string;
}


export class GoalResponseWorkspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class GoalResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=due_on" })
  dueOn?: string;

  @Metadata({ data: "json, name=followers", elemType: shared.UserCompact })
  followers?: UserCompact[];

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=html_notes" })
  htmlNotes?: string;

  @Metadata({ data: "json, name=is_workspace_level" })
  isWorkspaceLevel?: boolean;

  @Metadata({ data: "json, name=liked" })
  liked?: boolean;

  @Metadata({ data: "json, name=likes", elemType: shared.Like })
  likes?: Like[];

  @Metadata({ data: "json, name=metric" })
  metric?: GoalResponseMetric;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=num_likes" })
  numLikes?: number;

  @Metadata({ data: "json, name=owner" })
  owner?: GoalResponseOwner;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=start_on" })
  startOn?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=team" })
  team?: GoalResponseTeam;

  @Metadata({ data: "json, name=time_period" })
  timePeriod?: GoalResponseTimePeriod;

  @Metadata({ data: "json, name=workspace" })
  workspace?: GoalResponseWorkspace;
}
