import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimestampRange
/** 
 * The range of timestamps for which to return fragments.
**/
export class TimestampRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTimestamp" })
  endTimestamp: Date;

  @Metadata({ data: "json, name=StartTimestamp" })
  startTimestamp: Date;
}
