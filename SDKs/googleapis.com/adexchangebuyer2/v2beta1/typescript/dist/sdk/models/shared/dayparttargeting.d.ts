import { SpeakeasyBase } from "../../../internal/utils";
import { DayPart } from "./daypart";
export declare enum DayPartTargetingTimeZoneTypeEnum {
    TimeZoneSourceUnspecified = "TIME_ZONE_SOURCE_UNSPECIFIED",
    Publisher = "PUBLISHER",
    User = "USER"
}
/**
 * Specifies the day part targeting criteria.
**/
export declare class DayPartTargeting extends SpeakeasyBase {
    dayParts?: DayPart[];
    timeZoneType?: DayPartTargetingTimeZoneTypeEnum;
}
