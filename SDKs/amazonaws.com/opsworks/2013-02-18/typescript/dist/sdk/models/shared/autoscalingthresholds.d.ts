import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances.
**/
export declare class AutoScalingThresholds extends SpeakeasyBase {
    alarms?: string[];
    cpuThreshold?: number;
    ignoreMetricsTime?: number;
    instanceCount?: number;
    loadThreshold?: number;
    memoryThreshold?: number;
    thresholdsWaitTime?: number;
}
