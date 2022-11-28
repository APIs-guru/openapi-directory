import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type that defines the fields for a paginated result set of available schedules. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export declare class UserScheduleResponse extends SpeakeasyBase {
    creationDate?: string;
    feedType?: string;
    lastModifiedDate?: string;
    preferredTriggerDayOfMonth?: number;
    preferredTriggerDayOfWeek?: string;
    preferredTriggerHour?: string;
    scheduleEndDate?: string;
    scheduleId?: string;
    scheduleName?: string;
    scheduleStartDate?: string;
    scheduleTemplateId?: string;
    schemaVersion?: string;
    status?: string;
    statusReason?: string;
}
