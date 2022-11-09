import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateUserScheduleRequest
/** 
 * The type that defines the fields for a schedule update to a schedule generated with the Feed API.
**/
export class UpdateUserScheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=preferredTriggerDayOfMonth" })
  preferredTriggerDayOfMonth?: number;

  @Metadata({ data: "json, name=preferredTriggerDayOfWeek" })
  preferredTriggerDayOfWeek?: string;

  @Metadata({ data: "json, name=preferredTriggerHour" })
  preferredTriggerHour?: string;

  @Metadata({ data: "json, name=scheduleEndDate" })
  scheduleEndDate?: string;

  @Metadata({ data: "json, name=scheduleName" })
  scheduleName?: string;

  @Metadata({ data: "json, name=scheduleStartDate" })
  scheduleStartDate?: string;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
