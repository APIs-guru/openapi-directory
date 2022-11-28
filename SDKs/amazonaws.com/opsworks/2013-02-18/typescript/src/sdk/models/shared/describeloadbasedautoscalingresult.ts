import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBasedAutoScalingConfiguration } from "./loadbasedautoscalingconfiguration";



// DescribeLoadBasedAutoScalingResult
/** 
 * Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request.
**/
export class DescribeLoadBasedAutoScalingResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LoadBasedAutoScalingConfigurations", elemType: LoadBasedAutoScalingConfiguration })
  loadBasedAutoScalingConfigurations?: LoadBasedAutoScalingConfiguration[];
}
