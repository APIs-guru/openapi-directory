import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoalMetricRequestUnitEnum {
    None = "none",
    Currency = "currency",
    Percentage = "percentage"
}


export class GoalMetricRequestInput extends SpeakeasyBase {
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
  unit?: GoalMetricRequestUnitEnum;
}
