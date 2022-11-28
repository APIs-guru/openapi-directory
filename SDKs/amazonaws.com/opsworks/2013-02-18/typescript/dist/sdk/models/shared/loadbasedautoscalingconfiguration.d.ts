import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingThresholds } from "./autoscalingthresholds";
/**
 * Describes a layer's load-based auto scaling configuration.
**/
export declare class LoadBasedAutoScalingConfiguration extends SpeakeasyBase {
    downScaling?: AutoScalingThresholds;
    enable?: boolean;
    layerId?: string;
    upScaling?: AutoScalingThresholds;
}
