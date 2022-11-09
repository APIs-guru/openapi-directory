import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionStateEnum } from "./executionstateenum";
/**
 * The summary of a task execution on a specified device.
**/
export declare class ExecutionSummary extends SpeakeasyBase {
    executionId?: string;
    managedDeviceId?: string;
    state?: ExecutionStateEnum;
    taskId?: string;
}
