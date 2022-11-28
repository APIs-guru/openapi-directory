import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. After the condition is met, the processing job is stopped.
**/
export declare class ProcessingStoppingCondition extends SpeakeasyBase {
    maxRuntimeInSeconds: number;
}
