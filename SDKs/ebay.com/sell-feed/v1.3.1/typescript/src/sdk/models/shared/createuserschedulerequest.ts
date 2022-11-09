import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateUserScheduleRequest
/** 
 * The type that defines the fields for the createSchedule method.
**/
export class CreateUserScheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedType" })
  feedType?: string;

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

  @Metadata({ data: "json, name=scheduleTemplateId" })
  scheduleTemplateId?: string;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
