import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceSummary } from "./instancesummary";


export class DescribeDeviceEc2Output extends SpeakeasyBase {
  @Metadata({ data: "json, name=instances", elemType: shared.InstanceSummary })
  instances?: InstanceSummary[];
}
