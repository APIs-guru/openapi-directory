import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TransferMessageSeverityEnum {
    MessageSeverityUnspecified = "MESSAGE_SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * Represents a user facing message for a particular data transfer run.
**/
export declare class TransferMessage extends SpeakeasyBase {
    messageText?: string;
    messageTime?: string;
    severity?: TransferMessageSeverityEnum;
}
