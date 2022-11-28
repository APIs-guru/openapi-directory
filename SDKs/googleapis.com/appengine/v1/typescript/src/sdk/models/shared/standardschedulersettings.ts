import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StandardSchedulerSettings
/** 
 * Scheduler settings for standard environment.
**/
export class StandardSchedulerSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxInstances" })
  maxInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=minInstances" })
  minInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=targetCpuUtilization" })
  targetCpuUtilization?: number;

  @SpeakeasyMetadata({ data: "json, name=targetThroughputUtilization" })
  targetThroughputUtilization?: number;
}
