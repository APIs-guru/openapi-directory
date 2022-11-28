import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimestampRange
/** 
 * The range of timestamps for which to return fragments.
**/
export class TimestampRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTimestamp" })
  endTimestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=StartTimestamp" })
  startTimestamp: Date;
}
