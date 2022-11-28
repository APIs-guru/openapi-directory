import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FrequencyCapTimeUnitTypeEnum {
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


// FrequencyCap
/** 
 * Message contains details about publisher-set frequency caps of the delivery.
**/
export class FrequencyCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxImpressions" })
  maxImpressions?: number;

  @SpeakeasyMetadata({ data: "json, name=timeUnitType" })
  timeUnitType?: FrequencyCapTimeUnitTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=timeUnitsCount" })
  timeUnitsCount?: number;
}
