import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LoadBasedAutoScalingConfiguration } from "./loadbasedautoscalingconfiguration";


// DescribeLoadBasedAutoScalingResult
/** 
 * Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request.
**/
export class DescribeLoadBasedAutoScalingResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=LoadBasedAutoScalingConfigurations", elemType: shared.LoadBasedAutoScalingConfiguration })
  loadBasedAutoScalingConfigurations?: LoadBasedAutoScalingConfiguration[];
}
