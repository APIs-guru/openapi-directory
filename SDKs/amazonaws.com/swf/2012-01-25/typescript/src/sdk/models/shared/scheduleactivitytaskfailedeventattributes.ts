import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityType } from "./activitytype";
import { ScheduleActivityTaskFailedCauseEnum } from "./scheduleactivitytaskfailedcauseenum";



// ScheduleActivityTaskFailedEventAttributes
/** 
 * Provides the details of the <code>ScheduleActivityTaskFailed</code> event.
**/
export class ScheduleActivityTaskFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityId" })
  activityId: string;

  @SpeakeasyMetadata({ data: "json, name=activityType" })
  activityType: ActivityType;

  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause: ScheduleActivityTaskFailedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}
