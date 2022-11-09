import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivityType } from "./activitytype";
import { ScheduleActivityTaskFailedCauseEnum } from "./scheduleactivitytaskfailedcauseenum";


// ScheduleActivityTaskFailedEventAttributes
/** 
 * Provides the details of the <code>ScheduleActivityTaskFailed</code> event.
**/
export class ScheduleActivityTaskFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityId" })
  activityId: string;

  @Metadata({ data: "json, name=activityType" })
  activityType: ActivityType;

  @Metadata({ data: "json, name=cause" })
  cause: ScheduleActivityTaskFailedCauseEnum;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}
