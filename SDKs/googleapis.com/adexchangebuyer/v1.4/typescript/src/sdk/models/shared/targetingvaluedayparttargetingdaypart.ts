import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TargetingValueDayPartTargetingDayPart extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: string;

  @Metadata({ data: "json, name=endHour" })
  endHour?: number;

  @Metadata({ data: "json, name=endMinute" })
  endMinute?: number;

  @Metadata({ data: "json, name=startHour" })
  startHour?: number;

  @Metadata({ data: "json, name=startMinute" })
  startMinute?: number;
}
