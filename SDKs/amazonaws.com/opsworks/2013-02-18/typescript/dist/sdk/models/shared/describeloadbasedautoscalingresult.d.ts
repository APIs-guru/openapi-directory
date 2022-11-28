import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBasedAutoScalingConfiguration } from "./loadbasedautoscalingconfiguration";
/**
 * Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request.
**/
export declare class DescribeLoadBasedAutoScalingResult extends SpeakeasyBase {
    loadBasedAutoScalingConfigurations?: LoadBasedAutoScalingConfiguration[];
}
