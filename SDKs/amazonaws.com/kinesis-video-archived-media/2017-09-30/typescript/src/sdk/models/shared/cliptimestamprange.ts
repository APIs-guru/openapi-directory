import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClipTimestampRange
/** 
 * The range of timestamps for which to return fragments.
**/
export class ClipTimestampRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTimestamp" })
  endTimestamp: Date;

  @Metadata({ data: "json, name=StartTimestamp" })
  startTimestamp: Date;
}
