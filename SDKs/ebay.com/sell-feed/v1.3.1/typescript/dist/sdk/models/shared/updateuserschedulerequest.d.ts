import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type that defines the fields for a schedule update to a schedule generated with the Feed API.
**/
export declare class UpdateUserScheduleRequest extends SpeakeasyBase {
    preferredTriggerDayOfMonth?: number;
    preferredTriggerDayOfWeek?: string;
    preferredTriggerHour?: string;
    scheduleEndDate?: string;
    scheduleName?: string;
    scheduleStartDate?: string;
    schemaVersion?: string;
}
