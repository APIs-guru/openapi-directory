import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserScheduleResponse
/** 
 * The type that defines the fields for a paginated result set of available schedules. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export class UserScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredTriggerDayOfMonth" })
  preferredTriggerDayOfMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=preferredTriggerDayOfWeek" })
  preferredTriggerDayOfWeek?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredTriggerHour" })
  preferredTriggerHour?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleEndDate" })
  scheduleEndDate?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleId" })
  scheduleId?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleName" })
  scheduleName?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleStartDate" })
  scheduleStartDate?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleTemplateId" })
  scheduleTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: string;
}
