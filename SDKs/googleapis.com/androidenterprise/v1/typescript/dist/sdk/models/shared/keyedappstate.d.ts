import { SpeakeasyBase } from "../../../internal/utils";
export declare enum KeyedAppStateSeverityEnum {
    SeverityUnknown = "severityUnknown",
    SeverityInfo = "severityInfo",
    SeverityError = "severityError"
}
/**
 * Represents a keyed app state containing a key, timestamp, severity level, optional description, and optional data.
**/
export declare class KeyedAppState extends SpeakeasyBase {
    data?: string;
    key?: string;
    message?: string;
    severity?: KeyedAppStateSeverityEnum;
    stateTimestampMillis?: string;
}
