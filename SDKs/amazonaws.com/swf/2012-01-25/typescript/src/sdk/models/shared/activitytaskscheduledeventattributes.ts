import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivityType } from "./activitytype";
import { TaskList } from "./tasklist";


// ActivityTaskScheduledEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskScheduled</code> event.
**/
export class ActivityTaskScheduledEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityId" })
  activityId: string;

  @Metadata({ data: "json, name=activityType" })
  activityType: ActivityType;

  @Metadata({ data: "json, name=control" })
  control?: string;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=heartbeatTimeout" })
  heartbeatTimeout?: string;

  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=scheduleToCloseTimeout" })
  scheduleToCloseTimeout?: string;

  @Metadata({ data: "json, name=scheduleToStartTimeout" })
  scheduleToStartTimeout?: string;

  @Metadata({ data: "json, name=startToCloseTimeout" })
  startToCloseTimeout?: string;

  @Metadata({ data: "json, name=taskList" })
  taskList: TaskList;

  @Metadata({ data: "json, name=taskPriority" })
  taskPriority?: string;
}
