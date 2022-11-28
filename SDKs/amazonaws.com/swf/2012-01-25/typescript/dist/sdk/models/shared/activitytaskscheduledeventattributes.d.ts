import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityType } from "./activitytype";
import { TaskList } from "./tasklist";
/**
 * Provides the details of the <code>ActivityTaskScheduled</code> event.
**/
export declare class ActivityTaskScheduledEventAttributes extends SpeakeasyBase {
    activityId: string;
    activityType: ActivityType;
    control?: string;
    decisionTaskCompletedEventId: number;
    heartbeatTimeout?: string;
    input?: string;
    scheduleToCloseTimeout?: string;
    scheduleToStartTimeout?: string;
    startToCloseTimeout?: string;
    taskList: TaskList;
    taskPriority?: string;
}
