import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";


export enum DayPartDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}


// DayPart
/** 
 * Daypart targeting message that specifies if the ad can be shown only during certain parts of a day/week.
**/
export class DayPart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: DayPartDayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: TimeOfDay;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: TimeOfDay;
}
