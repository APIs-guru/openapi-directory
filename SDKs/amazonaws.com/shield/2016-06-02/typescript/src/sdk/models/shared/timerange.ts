import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeRange
/** 
 * The time range. 
**/
export class TimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FromInclusive" })
  fromInclusive?: Date;

  @SpeakeasyMetadata({ data: "json, name=ToExclusive" })
  toExclusive?: Date;
}
