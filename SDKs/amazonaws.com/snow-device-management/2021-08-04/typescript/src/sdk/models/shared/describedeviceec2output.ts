import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceSummary } from "./instancesummary";



export class DescribeDeviceEc2Output extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instances", elemType: InstanceSummary })
  instances?: InstanceSummary[];
}
