import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoScalingThresholds
/** 
 * Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances.
**/
export class AutoScalingThresholds extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alarms" })
  alarms?: string[];

  @Metadata({ data: "json, name=CpuThreshold" })
  cpuThreshold?: number;

  @Metadata({ data: "json, name=IgnoreMetricsTime" })
  ignoreMetricsTime?: number;

  @Metadata({ data: "json, name=InstanceCount" })
  instanceCount?: number;

  @Metadata({ data: "json, name=LoadThreshold" })
  loadThreshold?: number;

  @Metadata({ data: "json, name=MemoryThreshold" })
  memoryThreshold?: number;

  @Metadata({ data: "json, name=ThresholdsWaitTime" })
  thresholdsWaitTime?: number;
}
