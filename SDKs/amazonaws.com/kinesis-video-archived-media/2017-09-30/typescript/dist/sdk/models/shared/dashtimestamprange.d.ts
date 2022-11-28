import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p> <p>The values in <code>DASHimestampRange</code> are inclusive. Fragments that start exactly at or after the start time are included in the session. Fragments that start before the start time and continue past it are not included in the session.</p>
**/
export declare class DashTimestampRange extends SpeakeasyBase {
    endTimestamp?: Date;
    startTimestamp?: Date;
}
