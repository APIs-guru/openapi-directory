import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HlsTimestampRange
/** 
 * <p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p>
**/
export class HlsTimestampRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTimestamp" })
  endTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartTimestamp" })
  startTimestamp?: Date;
}
