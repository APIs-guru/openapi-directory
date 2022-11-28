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
 * Daypart targeting message that specifies if the ad can be shown only during certain parts of a day/week.
**/
export declare class DayPart extends SpeakeasyBase {
    dayOfWeek?: DayPartDayOfWeekEnum;
    endTime?: TimeOfDay;
    startTime?: TimeOfDay;
}
