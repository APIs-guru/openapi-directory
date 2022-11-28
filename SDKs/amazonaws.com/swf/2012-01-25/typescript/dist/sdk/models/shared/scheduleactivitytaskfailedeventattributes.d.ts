import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityType } from "./activitytype";
import { ScheduleActivityTaskFailedCauseEnum } from "./scheduleactivitytaskfailedcauseenum";
/**
 * Provides the details of the <code>ScheduleActivityTaskFailed</code> event.
**/
export declare class ScheduleActivityTaskFailedEventAttributes extends SpeakeasyBase {
    activityId: string;
    activityType: ActivityType;
    cause: ScheduleActivityTaskFailedCauseEnum;
    decisionTaskCompletedEventId: number;
}
