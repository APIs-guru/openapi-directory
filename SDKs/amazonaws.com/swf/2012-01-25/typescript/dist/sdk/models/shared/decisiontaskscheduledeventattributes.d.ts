import { SpeakeasyBase } from "../../../internal/utils";
import { TaskList } from "./tasklist";
/**
 * Provides details about the <code>DecisionTaskScheduled</code> event.
**/
export declare class DecisionTaskScheduledEventAttributes extends SpeakeasyBase {
    startToCloseTimeout?: string;
    taskList: TaskList;
    taskPriority?: string;
}
