import { SpeakeasyBase } from "../../../internal/utils";
import { DayPart } from "./daypart";
export declare enum DayPartTargetingTimeZoneTypeEnum {
    TimeZoneTypeUnspecified = "TIME_ZONE_TYPE_UNSPECIFIED",
    Seller = "SELLER",
    User = "USER"
}
/**
 * Represents Daypart targeting.
**/
export declare class DayPartTargeting extends SpeakeasyBase {
    dayParts?: DayPart[];
    timeZoneType?: DayPartTargetingTimeZoneTypeEnum;
}
