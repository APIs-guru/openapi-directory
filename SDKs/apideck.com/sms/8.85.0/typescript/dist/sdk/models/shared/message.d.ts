import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
export declare enum MessageDirectionEnum {
    Inbound = "inbound",
    OutboundApi = "outbound-api",
    OutboundCall = "outbound-call",
    OutboundReply = "outbound-reply",
    Unknown = "unknown"
}
/**
 * The error returned if your message status is failed or undelivered.
**/
export declare class MessageError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Price of the message.
**/
export declare class MessagePrice extends SpeakeasyBase {
    currency?: CurrencyEnum;
    perUnit?: string;
    totalAmount?: string;
}
export declare enum MessageStatusEnum {
    Accepted = "accepted",
    Scheduled = "scheduled",
    Canceled = "canceled",
    Queued = "queued",
    Sending = "sending",
    Sent = "sent",
    Failed = "failed",
    Delivered = "delivered",
    Undelivered = "undelivered",
    Receiving = "receiving",
    Received = "received",
    Read = "read"
}
export declare enum MessageMessageTypeEnum {
    Sms = "sms",
    Mms = "mms"
}
export declare class MessageInput extends SpeakeasyBase {
    body: string;
    from: string;
    messagingServiceId?: string;
    reference?: string;
    scheduledAt?: Date;
    subject?: string;
    to: string;
    type?: MessageMessageTypeEnum;
    webhookUrl?: string;
}
export declare class Message extends SpeakeasyBase {
    body: string;
    createdAt?: Date;
    createdBy?: string;
    direction?: MessageDirectionEnum;
    error?: MessageError;
    from: string;
    id?: string;
    messagingServiceId?: string;
    numberOfMediaFiles?: number;
    numberOfUnits?: number;
    price?: MessagePrice;
    reference?: string;
    scheduledAt?: Date;
    sentAt?: Date;
    status?: MessageStatusEnum;
    subject?: string;
    to: string;
    type?: MessageMessageTypeEnum;
    updatedAt?: Date;
    updatedBy?: string;
    webhookUrl?: string;
}
