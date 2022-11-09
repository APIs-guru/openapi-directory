import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Scheduler settings for standard environment.
**/
export declare class StandardSchedulerSettings extends SpeakeasyBase {
    maxInstances?: number;
    minInstances?: number;
    targetCpuUtilization?: number;
    targetThroughputUtilization?: number;
}
