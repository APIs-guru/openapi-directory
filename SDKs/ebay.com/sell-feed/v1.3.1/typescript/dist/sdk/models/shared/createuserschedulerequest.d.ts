import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type that defines the fields for the createSchedule method.
**/
export declare class CreateUserScheduleRequest extends SpeakeasyBase {
    feedType?: string;
    preferredTriggerDayOfMonth?: number;
    preferredTriggerDayOfWeek?: string;
    preferredTriggerHour?: string;
    scheduleEndDate?: string;
    scheduleName?: string;
    scheduleStartDate?: string;
    scheduleTemplateId?: string;
    schemaVersion?: string;
}
