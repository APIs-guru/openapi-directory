import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeTimeBasedAutoScalingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceIds" })
  instanceIds: string[];
}
