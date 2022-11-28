import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateUserScheduleRequest
/** 
 * The type that defines the fields for the createSchedule method.
**/
export class CreateUserScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredTriggerDayOfMonth" })
  preferredTriggerDayOfMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=preferredTriggerDayOfWeek" })
  preferredTriggerDayOfWeek?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredTriggerHour" })
  preferredTriggerHour?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleEndDate" })
  scheduleEndDate?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleName" })
  scheduleName?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleStartDate" })
  scheduleStartDate?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleTemplateId" })
  scheduleTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
