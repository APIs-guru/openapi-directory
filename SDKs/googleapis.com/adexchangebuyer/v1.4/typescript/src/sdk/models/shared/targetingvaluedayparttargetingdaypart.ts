import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TargetingValueDayPartTargetingDayPart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: string;

  @SpeakeasyMetadata({ data: "json, name=endHour" })
  endHour?: number;

  @SpeakeasyMetadata({ data: "json, name=endMinute" })
  endMinute?: number;

  @SpeakeasyMetadata({ data: "json, name=startHour" })
  startHour?: number;

  @SpeakeasyMetadata({ data: "json, name=startMinute" })
  startMinute?: number;
}
