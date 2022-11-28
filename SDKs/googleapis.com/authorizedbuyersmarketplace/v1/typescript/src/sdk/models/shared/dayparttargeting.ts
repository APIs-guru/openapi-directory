import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DayPart } from "./daypart";


export enum DayPartTargetingTimeZoneTypeEnum {
    TimeZoneTypeUnspecified = "TIME_ZONE_TYPE_UNSPECIFIED",
    Seller = "SELLER",
    User = "USER"
}


// DayPartTargeting
/** 
 * Represents Daypart targeting.
**/
export class DayPartTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayParts", elemType: DayPart })
  dayParts?: DayPart[];

  @SpeakeasyMetadata({ data: "json, name=timeZoneType" })
  timeZoneType?: DayPartTargetingTimeZoneTypeEnum;
}
