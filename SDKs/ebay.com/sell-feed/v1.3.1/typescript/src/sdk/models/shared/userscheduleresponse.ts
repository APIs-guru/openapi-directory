import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserScheduleResponse
/** 
 * The type that defines the fields for a paginated result set of available schedules. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export class UserScheduleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=feedType" })
  feedType?: string;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: string;

  @Metadata({ data: "json, name=preferredTriggerDayOfMonth" })
  preferredTriggerDayOfMonth?: number;

  @Metadata({ data: "json, name=preferredTriggerDayOfWeek" })
  preferredTriggerDayOfWeek?: string;

  @Metadata({ data: "json, name=preferredTriggerHour" })
  preferredTriggerHour?: string;

  @Metadata({ data: "json, name=scheduleEndDate" })
  scheduleEndDate?: string;

  @Metadata({ data: "json, name=scheduleId" })
  scheduleId?: string;

  @Metadata({ data: "json, name=scheduleName" })
  scheduleName?: string;

  @Metadata({ data: "json, name=scheduleStartDate" })
  scheduleStartDate?: string;

  @Metadata({ data: "json, name=scheduleTemplateId" })
  scheduleTemplateId?: string;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: string;
}
