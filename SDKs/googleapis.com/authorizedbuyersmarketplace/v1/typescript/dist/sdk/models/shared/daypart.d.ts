import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
export declare enum DayPartDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
/**
 * Defines targeting for a period of time on a specific week day.
**/
export declare class DayPart extends SpeakeasyBase {
    dayOfWeek?: DayPartDayOfWeekEnum;
    endTime?: TimeOfDay;
    startTime?: TimeOfDay;
}
