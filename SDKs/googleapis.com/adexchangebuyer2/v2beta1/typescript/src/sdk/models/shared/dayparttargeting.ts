import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DayPart } from "./daypart";


export enum DayPartTargetingTimeZoneTypeEnum {
    TimeZoneSourceUnspecified = "TIME_ZONE_SOURCE_UNSPECIFIED",
    Publisher = "PUBLISHER",
    User = "USER"
}


// DayPartTargeting
/** 
 * Specifies the day part targeting criteria.
**/
export class DayPartTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayParts", elemType: DayPart })
  dayParts?: DayPart[];

  @SpeakeasyMetadata({ data: "json, name=timeZoneType" })
  timeZoneType?: DayPartTargetingTimeZoneTypeEnum;
}
