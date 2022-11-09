import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HlsTimestampRange
/** 
 * <p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p>
**/
export class HlsTimestampRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTimestamp" })
  endTimestamp?: Date;

  @Metadata({ data: "json, name=StartTimestamp" })
  startTimestamp?: Date;
}
