import { SpeakeasyBase } from "../../../internal/utils";
import { TimeBasedAutoScalingConfiguration } from "./timebasedautoscalingconfiguration";
/**
 * Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.
**/
export declare class DescribeTimeBasedAutoScalingResult extends SpeakeasyBase {
    timeBasedAutoScalingConfigurations?: TimeBasedAutoScalingConfiguration[];
}
