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
 * Message contains details about publisher-set frequency caps of the delivery.
**/
export declare class FrequencyCap extends SpeakeasyBase {
    maxImpressions?: number;
    timeUnitType?: FrequencyCapTimeUnitTypeEnum;
    timeUnitsCount?: number;
}
