import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeRange
/** 
 * The time range. 
**/
export class TimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=FromInclusive" })
  fromInclusive?: Date;

  @Metadata({ data: "json, name=ToExclusive" })
  toExclusive?: Date;
}
