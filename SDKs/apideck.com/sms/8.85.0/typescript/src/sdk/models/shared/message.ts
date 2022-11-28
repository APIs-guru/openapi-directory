import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";


export enum MessageDirectionEnum {
    Inbound = "inbound",
    OutboundApi = "outbound-api",
    OutboundCall = "outbound-call",
    OutboundReply = "outbound-reply",
    Unknown = "unknown"
}


// MessageError
/** 
 * The error returned if your message status is failed or undelivered.
**/
export class MessageError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


// MessagePrice
/** 
 * Price of the message.
**/
export class MessagePrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=per_unit" })
  perUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount?: string;
}

export enum MessageStatusEnum {
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

export enum MessageMessageTypeEnum {
    Sms = "sms",
    Mms = "mms"
}


export class MessageInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=messaging_service_id" })
  messagingServiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduled_at" })
  scheduledAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MessageMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}


export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: MessageDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: MessageError;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=messaging_service_id" })
  messagingServiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=number_of_media_files" })
  numberOfMediaFiles?: number;

  @SpeakeasyMetadata({ data: "json, name=number_of_units" })
  numberOfUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: MessagePrice;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduled_at" })
  scheduledAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=sent_at" })
  sentAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MessageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MessageMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}
