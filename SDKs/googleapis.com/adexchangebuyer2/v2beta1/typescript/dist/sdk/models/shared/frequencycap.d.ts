import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FrequencyCapTimeUnitTypeEnum {
    TimeUnitTypeUnspecified = "TIME_UNIT_TYPE_UNSPECIFIED",
    Minute = "MINUTE",
    Hour = "HOUR",
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH",
    Lifetime = "LIFETIME",
    Pod = "POD",
    Stream = "STREAM"
}
/**
 * Frequency cap.
**/
export declare class FrequencyCap extends SpeakeasyBase {
    maxImpressions?: number;
    numTimeUnits?: number;
    timeUnitType?: FrequencyCapTimeUnitTypeEnum;
}
