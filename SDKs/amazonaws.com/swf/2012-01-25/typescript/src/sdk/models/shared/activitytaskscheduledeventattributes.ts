import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityType } from "./activitytype";
import { TaskList } from "./tasklist";



// ActivityTaskScheduledEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskScheduled</code> event.
**/
export class ActivityTaskScheduledEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityId" })
  activityId: string;

  @SpeakeasyMetadata({ data: "json, name=activityType" })
  activityType: ActivityType;

  @SpeakeasyMetadata({ data: "json, name=control" })
  control?: string;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=heartbeatTimeout" })
  heartbeatTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleToCloseTimeout" })
  scheduleToCloseTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleToStartTimeout" })
  scheduleToStartTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=startToCloseTimeout" })
  startToCloseTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=taskList" })
  taskList: TaskList;

  @SpeakeasyMetadata({ data: "json, name=taskPriority" })
  taskPriority?: string;
}
