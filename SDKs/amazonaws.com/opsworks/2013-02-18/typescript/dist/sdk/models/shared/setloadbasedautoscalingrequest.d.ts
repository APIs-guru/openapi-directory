import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingThresholds } from "./autoscalingthresholds";
export declare class SetLoadBasedAutoScalingRequest extends SpeakeasyBase {
    downScaling?: AutoScalingThresholds;
    enable?: boolean;
    layerId: string;
    upScaling?: AutoScalingThresholds;
}
