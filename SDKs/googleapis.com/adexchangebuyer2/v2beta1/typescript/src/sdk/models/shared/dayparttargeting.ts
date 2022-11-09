import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DayPart } from "./daypart";

export enum DayPartTargetingTimeZoneTypeEnum {
    TimeZoneSourceUnspecified = "TIME_ZONE_SOURCE_UNSPECIFIED"
,    Publisher = "PUBLISHER"
,    User = "USER"
}


// DayPartTargeting
/** 
 * Specifies the day part targeting criteria.
**/
export class DayPartTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayParts", elemType: shared.DayPart })
  dayParts?: DayPart[];

  @Metadata({ data: "json, name=timeZoneType" })
  timeZoneType?: DayPartTargetingTimeZoneTypeEnum;
}
