import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoalMetricCurrentValueRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_number_value" })
  currentNumberValue?: number;
}
