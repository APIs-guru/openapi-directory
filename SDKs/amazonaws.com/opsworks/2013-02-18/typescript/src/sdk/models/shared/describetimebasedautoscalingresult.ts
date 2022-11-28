import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeBasedAutoScalingConfiguration } from "./timebasedautoscalingconfiguration";



// DescribeTimeBasedAutoScalingResult
/** 
 * Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.
**/
export class DescribeTimeBasedAutoScalingResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TimeBasedAutoScalingConfigurations", elemType: TimeBasedAutoScalingConfiguration })
  timeBasedAutoScalingConfigurations?: TimeBasedAutoScalingConfiguration[];
}
