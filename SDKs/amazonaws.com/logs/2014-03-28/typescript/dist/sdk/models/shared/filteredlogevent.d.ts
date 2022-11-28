import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a matched event.
**/
export declare class FilteredLogEvent extends SpeakeasyBase {
    eventId?: string;
    ingestionTime?: number;
    logStreamName?: string;
    message?: string;
    timestamp?: number;
}
