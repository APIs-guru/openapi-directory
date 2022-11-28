import { SpeakeasyBase } from "../../../internal/utils";
import { TaskList } from "./tasklist";
/**
 * Configuration settings registered with the activity type.
**/
export declare class ActivityTypeConfiguration extends SpeakeasyBase {
    defaultTaskHeartbeatTimeout?: string;
    defaultTaskList?: TaskList;
    defaultTaskPriority?: string;
    defaultTaskScheduleToCloseTimeout?: string;
    defaultTaskScheduleToStartTimeout?: string;
    defaultTaskStartToCloseTimeout?: string;
}
