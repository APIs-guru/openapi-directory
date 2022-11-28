import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateUserScheduleRequest
/** 
 * The type that defines the fields for a schedule update to a schedule generated with the Feed API.
**/
export class UpdateUserScheduleRequest extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
