import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CpuUtilization } from "./cpuutilization";
import { DiskUtilization } from "./diskutilization";
import { NetworkUtilization } from "./networkutilization";
import { RequestUtilization } from "./requestutilization";
import { StandardSchedulerSettings } from "./standardschedulersettings";


// AutomaticScaling
/** 
 * Automatic scaling is based on request rate, response latencies, and other application metrics.
**/
export class AutomaticScaling extends SpeakeasyBase {
  @Metadata({ data: "json, name=coolDownPeriod" })
  coolDownPeriod?: string;

  @Metadata({ data: "json, name=cpuUtilization" })
  cpuUtilization?: CpuUtilization;

  @Metadata({ data: "json, name=diskUtilization" })
  diskUtilization?: DiskUtilization;

  @Metadata({ data: "json, name=maxConcurrentRequests" })
  maxConcurrentRequests?: number;

  @Metadata({ data: "json, name=maxIdleInstances" })
  maxIdleInstances?: number;

  @Metadata({ data: "json, name=maxPendingLatency" })
  maxPendingLatency?: string;

  @Metadata({ data: "json, name=maxTotalInstances" })
  maxTotalInstances?: number;

  @Metadata({ data: "json, name=minIdleInstances" })
  minIdleInstances?: number;

  @Metadata({ data: "json, name=minPendingLatency" })
  minPendingLatency?: string;

  @Metadata({ data: "json, name=minTotalInstances" })
  minTotalInstances?: number;

  @Metadata({ data: "json, name=networkUtilization" })
  networkUtilization?: NetworkUtilization;

  @Metadata({ data: "json, name=requestUtilization" })
  requestUtilization?: RequestUtilization;

  @Metadata({ data: "json, name=standardSchedulerSettings" })
  standardSchedulerSettings?: StandardSchedulerSettings;
}
