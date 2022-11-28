import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A time limit for how long the monitoring job is allowed to run before stopping.
**/
export declare class MonitoringStoppingCondition extends SpeakeasyBase {
    maxRuntimeInSeconds: number;
}
