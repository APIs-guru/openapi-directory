import { SpeakeasyBase } from "../../../internal/utils";
import { TaskList } from "./tasklist";
export declare class RegisterActivityTypeInput extends SpeakeasyBase {
    defaultTaskHeartbeatTimeout?: string;
    defaultTaskList?: TaskList;
    defaultTaskPriority?: string;
    defaultTaskScheduleToCloseTimeout?: string;
    defaultTaskScheduleToStartTimeout?: string;
    defaultTaskStartToCloseTimeout?: string;
    description?: string;
    domain: string;
    name: string;
    version: string;
}
