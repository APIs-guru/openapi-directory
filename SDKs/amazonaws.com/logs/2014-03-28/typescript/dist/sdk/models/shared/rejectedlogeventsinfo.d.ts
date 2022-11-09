import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Represents the rejected events.
**/
export declare class RejectedLogEventsInfo extends SpeakeasyBase {
    expiredLogEventEndIndex?: number;
    tooNewLogEventStartIndex?: number;
    tooOldLogEventEndIndex?: number;
}
