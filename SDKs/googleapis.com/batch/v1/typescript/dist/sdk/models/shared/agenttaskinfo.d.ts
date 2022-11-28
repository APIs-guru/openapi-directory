import { SpeakeasyBase } from "../../../internal/utils";
import { TaskStatus } from "./taskstatus";
/**
 * Task Info
**/
export declare class AgentTaskInfo extends SpeakeasyBase {
    runnable?: string;
    taskId?: string;
    taskStatus?: TaskStatus;
}
