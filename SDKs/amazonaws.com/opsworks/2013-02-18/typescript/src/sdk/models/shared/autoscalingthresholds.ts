import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoScalingThresholds
/** 
 * Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances.
**/
export class AutoScalingThresholds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alarms" })
  alarms?: string[];

  @SpeakeasyMetadata({ data: "json, name=CpuThreshold" })
  cpuThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=IgnoreMetricsTime" })
  ignoreMetricsTime?: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceCount" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LoadThreshold" })
  loadThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=MemoryThreshold" })
  memoryThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=ThresholdsWaitTime" })
  thresholdsWaitTime?: number;
}
