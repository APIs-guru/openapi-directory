import { SpeakeasyBase } from "../../../internal/utils";
import { TaskStateEnum } from "./taskstateenum";
/**
 * Information about the task assigned to one or many devices.
**/
export declare class TaskSummary extends SpeakeasyBase {
    state?: TaskStateEnum;
    tags?: Map<string, string>;
    taskArn?: string;
    taskId: string;
}
