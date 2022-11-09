import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p>
**/
export declare class HlsTimestampRange extends SpeakeasyBase {
    endTimestamp?: Date;
    startTimestamp?: Date;
}
