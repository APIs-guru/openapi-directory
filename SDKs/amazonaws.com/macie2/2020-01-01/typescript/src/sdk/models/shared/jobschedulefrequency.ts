import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonthlySchedule } from "./monthlyschedule";
import { WeeklySchedule } from "./weeklyschedule";



// JobScheduleFrequency
/** 
 * Specifies the recurrence pattern for running a classification job.
**/
export class JobScheduleFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dailySchedule" })
  dailySchedule?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=monthlySchedule" })
  monthlySchedule?: MonthlySchedule;

  @SpeakeasyMetadata({ data: "json, name=weeklySchedule" })
  weeklySchedule?: WeeklySchedule;
}
