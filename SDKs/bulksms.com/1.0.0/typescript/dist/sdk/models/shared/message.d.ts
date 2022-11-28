import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MessageEncodingEnum {
    Text = "TEXT",
    Unicode = "UNICODE",
    Binary = "BINARY"
}
export declare enum MessageStatusSubtypeEnum {
    Expired = "EXPIRED",
    HandsetError = "HANDSET_ERROR",
    Blocked = "BLOCKED",
    NotSent = "NOT_SENT"
}
export declare enum MessageStatusTypeEnum {
    Accepted = "ACCEPTED",
    Scheduled = "SCHEDULED",
    Sent = "SENT",
    Delivered = "DELIVERED",
    Unknown = "UNKNOWN",
    Failed = "FAILED"
}
/**
 * The status of the message
**/
export declare class MessageStatus extends SpeakeasyBase {
    id: string;
    subtype?: MessageStatusSubtypeEnum;
    type: MessageStatusTypeEnum;
}
/**
 * Identifies the submission.
 *
**/
export declare class MessageSubmission extends SpeakeasyBase {
    date: Date;
    id: string;
}
export declare enum MessageTypeEnum {
    Sent = "SENT",
    Received = "RECEIVED"
}
export declare class Message extends SpeakeasyBase {
    body: any;
    creditCost?: number;
    encoding?: MessageEncodingEnum;
    from?: string;
    id: string;
    messageClass?: number;
    numberOfParts?: number;
    protocolId?: number;
    relatedSentMessageId?: string;
    status: MessageStatus;
    submission?: MessageSubmission;
    to: string;
    type: MessageTypeEnum;
    userSuppliedId?: string;
}
