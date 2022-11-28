import { SpeakeasyBase } from "../../../internal/utils";
import { CpuUtilization } from "./cpuutilization";
import { DiskUtilization } from "./diskutilization";
import { NetworkUtilization } from "./networkutilization";
import { RequestUtilization } from "./requestutilization";
import { StandardSchedulerSettings } from "./standardschedulersettings";
/**
 * Automatic scaling is based on request rate, response latencies, and other application metrics.
**/
export declare class AutomaticScaling extends SpeakeasyBase {
    coolDownPeriod?: string;
    cpuUtilization?: CpuUtilization;
    diskUtilization?: DiskUtilization;
    maxConcurrentRequests?: number;
    maxIdleInstances?: number;
    maxPendingLatency?: string;
    maxTotalInstances?: number;
    minIdleInstances?: number;
    minPendingLatency?: string;
    minTotalInstances?: number;
    networkUtilization?: NetworkUtilization;
    requestUtilization?: RequestUtilization;
    standardSchedulerSettings?: StandardSchedulerSettings;
}
