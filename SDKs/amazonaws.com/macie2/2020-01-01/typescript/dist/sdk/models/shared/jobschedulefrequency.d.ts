import { SpeakeasyBase } from "../../../internal/utils";
import { MonthlySchedule } from "./monthlyschedule";
import { WeeklySchedule } from "./weeklyschedule";
/**
 * Specifies the recurrence pattern for running a classification job.
**/
export declare class JobScheduleFrequency extends SpeakeasyBase {
    dailySchedule?: Map<string, any>;
    monthlySchedule?: MonthlySchedule;
    weeklySchedule?: WeeklySchedule;
}
