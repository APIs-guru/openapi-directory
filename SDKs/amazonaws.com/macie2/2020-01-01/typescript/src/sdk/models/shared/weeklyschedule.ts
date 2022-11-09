import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DayOfWeekEnum } from "./dayofweekenum";


// WeeklySchedule
/** 
 * Specifies a weekly recurrence pattern for running a classification job.
**/
export class WeeklySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: DayOfWeekEnum;
}
