import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoalMetricCurrentValueRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=current_number_value" })
  currentNumberValue?: number;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
