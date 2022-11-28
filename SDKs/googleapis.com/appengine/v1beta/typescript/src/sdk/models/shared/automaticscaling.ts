import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CpuUtilization } from "./cpuutilization";
import { CustomMetric } from "./custommetric";
import { DiskUtilization } from "./diskutilization";
import { NetworkUtilization } from "./networkutilization";
import { RequestUtilization } from "./requestutilization";
import { StandardSchedulerSettings } from "./standardschedulersettings";



// AutomaticScaling
/** 
 * Automatic scaling is based on request rate, response latencies, and other application metrics.
**/
export class AutomaticScaling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coolDownPeriod" })
  coolDownPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=cpuUtilization" })
  cpuUtilization?: CpuUtilization;

  @SpeakeasyMetadata({ data: "json, name=customMetrics", elemType: CustomMetric })
  customMetrics?: CustomMetric[];

  @SpeakeasyMetadata({ data: "json, name=diskUtilization" })
  diskUtilization?: DiskUtilization;

  @SpeakeasyMetadata({ data: "json, name=maxConcurrentRequests" })
  maxConcurrentRequests?: number;

  @SpeakeasyMetadata({ data: "json, name=maxIdleInstances" })
  maxIdleInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=maxPendingLatency" })
  maxPendingLatency?: string;

  @SpeakeasyMetadata({ data: "json, name=maxTotalInstances" })
  maxTotalInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=minIdleInstances" })
  minIdleInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=minPendingLatency" })
  minPendingLatency?: string;

  @SpeakeasyMetadata({ data: "json, name=minTotalInstances" })
  minTotalInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=networkUtilization" })
  networkUtilization?: NetworkUtilization;

  @SpeakeasyMetadata({ data: "json, name=requestUtilization" })
  requestUtilization?: RequestUtilization;

  @SpeakeasyMetadata({ data: "json, name=standardSchedulerSettings" })
  standardSchedulerSettings?: StandardSchedulerSettings;
}
