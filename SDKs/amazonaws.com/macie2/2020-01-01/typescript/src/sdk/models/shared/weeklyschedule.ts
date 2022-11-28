import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DayOfWeekEnum } from "./dayofweekenum";



// WeeklySchedule
/** 
 * Specifies a weekly recurrence pattern for running a classification job.
**/
export class WeeklySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: DayOfWeekEnum;
}
