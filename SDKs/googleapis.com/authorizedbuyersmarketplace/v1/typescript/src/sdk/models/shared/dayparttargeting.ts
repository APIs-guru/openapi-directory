import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DayPart } from "./daypart";

export enum DayPartTargetingTimeZoneTypeEnum {
    TimeZoneTypeUnspecified = "TIME_ZONE_TYPE_UNSPECIFIED"
,    Seller = "SELLER"
,    User = "USER"
}


// DayPartTargeting
/** 
 * Represents Daypart targeting.
**/
export class DayPartTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayParts", elemType: shared.DayPart })
  dayParts?: DayPart[];

  @Metadata({ data: "json, name=timeZoneType" })
  timeZoneType?: DayPartTargetingTimeZoneTypeEnum;
}
