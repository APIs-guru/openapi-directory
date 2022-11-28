import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a log stream, which is a sequence of log events from a single emitter of logs.
**/
export declare class LogStream extends SpeakeasyBase {
    arn?: string;
    creationTime?: number;
    firstEventTimestamp?: number;
    lastEventTimestamp?: number;
    lastIngestionTime?: number;
    logStreamName?: string;
    storedBytes?: number;
    uploadSequenceToken?: string;
}
