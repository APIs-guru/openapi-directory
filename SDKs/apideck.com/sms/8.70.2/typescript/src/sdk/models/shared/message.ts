import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyEnum } from "./currencyenum";

export enum MessageDirectionEnum {
    Inbound = "inbound"
,    OutboundApi = "outbound-api"
,    OutboundCall = "outbound-call"
,    OutboundReply = "outbound-reply"
,    Unknown = "unknown"
}


// MessageError
/** 
 * The error returned if your message status is failed or undelivered.
**/
export class MessageError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


// MessagePrice
/** 
 * Price of the message.
**/
export class MessagePrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=per_unit" })
  perUnit?: string;

  @Metadata({ data: "json, name=total_amount" })
  totalAmount?: string;
}

export enum MessageStatusEnum {
    Accepted = "accepted"
,    Scheduled = "scheduled"
,    Canceled = "canceled"
,    Queued = "queued"
,    Sending = "sending"
,    Sent = "sent"
,    Failed = "failed"
,    Delivered = "delivered"
,    Undelivered = "undelivered"
,    Receiving = "receiving"
,    Received = "received"
,    Read = "read"
}

export enum MessageMessageTypeEnum {
    Sms = "sms"
,    Mms = "mms"
}


export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: MessageDirectionEnum;

  @Metadata({ data: "json, name=error" })
  error?: MessageError;

  @Metadata({ data: "json, name=from" })
  from: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=messaging_service_id" })
  messagingServiceId?: string;

  @Metadata({ data: "json, name=number_of_media_files" })
  numberOfMediaFiles?: number;

  @Metadata({ data: "json, name=number_of_units" })
  numberOfUnits?: number;

  @Metadata({ data: "json, name=price" })
  price?: MessagePrice;

  @Metadata({ data: "json, name=reference" })
  reference?: string;

  @Metadata({ data: "json, name=scheduled_at" })
  scheduledAt?: Date;

  @Metadata({ data: "json, name=sent_at" })
  sentAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: MessageStatusEnum;

  @Metadata({ data: "json, name=subject" })
  subject?: string;

  @Metadata({ data: "json, name=to" })
  to: string;

  @Metadata({ data: "json, name=type" })
  type?: MessageMessageTypeEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @Metadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}
