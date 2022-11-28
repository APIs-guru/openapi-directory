import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTimeBasedAutoScalingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceIds" })
  instanceIds: string[];
}
