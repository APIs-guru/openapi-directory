import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoalMetricRequestResourceSubtypeEnum {
    Number = "number"
}

export enum GoalMetricRequestUnitEnum {
    None = "none"
,    Currency = "currency"
,    Percentage = "percentage"
}


export class GoalMetricRequest extends SpeakeasyBase {
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
  resourceSubtype?: GoalMetricRequestResourceSubtypeEnum;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=target_number_value" })
  targetNumberValue?: number;

  @Metadata({ data: "json, name=unit" })
  unit?: GoalMetricRequestUnitEnum;
}
