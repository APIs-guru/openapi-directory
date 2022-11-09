import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonthlySchedule } from "./monthlyschedule";
import { WeeklySchedule } from "./weeklyschedule";


// JobScheduleFrequency
/** 
 * Specifies the recurrence pattern for running a classification job.
**/
export class JobScheduleFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=dailySchedule" })
  dailySchedule?: Map<string, any>;

  @Metadata({ data: "json, name=monthlySchedule" })
  monthlySchedule?: MonthlySchedule;

  @Metadata({ data: "json, name=weeklySchedule" })
  weeklySchedule?: WeeklySchedule;
}
