import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StandardSchedulerSettings
/** 
 * Scheduler settings for standard environment.
**/
export class StandardSchedulerSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxInstances" })
  maxInstances?: number;

  @Metadata({ data: "json, name=minInstances" })
  minInstances?: number;

  @Metadata({ data: "json, name=targetCpuUtilization" })
  targetCpuUtilization?: number;

  @Metadata({ data: "json, name=targetThroughputUtilization" })
  targetThroughputUtilization?: number;
}
