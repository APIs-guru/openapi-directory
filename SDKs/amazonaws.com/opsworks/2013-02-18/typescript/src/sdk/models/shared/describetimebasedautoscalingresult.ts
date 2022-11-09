import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimeBasedAutoScalingConfiguration } from "./timebasedautoscalingconfiguration";


// DescribeTimeBasedAutoScalingResult
/** 
 * Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.
**/
export class DescribeTimeBasedAutoScalingResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=TimeBasedAutoScalingConfigurations", elemType: shared.TimeBasedAutoScalingConfiguration })
  timeBasedAutoScalingConfigurations?: TimeBasedAutoScalingConfiguration[];
}
