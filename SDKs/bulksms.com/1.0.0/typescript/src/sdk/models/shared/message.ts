import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MessageEncodingEnum {
    Text = "TEXT"
,    Unicode = "UNICODE"
,    Binary = "BINARY"
}

export enum MessageStatusSubtypeEnum {
    Expired = "EXPIRED"
,    HandsetError = "HANDSET_ERROR"
,    Blocked = "BLOCKED"
,    NotSent = "NOT_SENT"
}

export enum MessageStatusTypeEnum {
    Accepted = "ACCEPTED"
,    Scheduled = "SCHEDULED"
,    Sent = "SENT"
,    Delivered = "DELIVERED"
,    Unknown = "UNKNOWN"
,    Failed = "FAILED"
}


// MessageStatus
/** 
 * The status of the message
**/
export class MessageStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=subtype" })
  subtype?: MessageStatusSubtypeEnum;

  @Metadata({ data: "json, name=type" })
  type: MessageStatusTypeEnum;
}


// MessageSubmission
/** 
 * Identifies the submission.
 * 
**/
export class MessageSubmission extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date: Date;

  @Metadata({ data: "json, name=id" })
  id: string;
}

export enum MessageTypeEnum {
    Sent = "SENT"
,    Received = "RECEIVED"
}


export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: any;

  @Metadata({ data: "json, name=creditCost" })
  creditCost?: number;

  @Metadata({ data: "json, name=encoding" })
  encoding?: MessageEncodingEnum;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=messageClass" })
  messageClass?: number;

  @Metadata({ data: "json, name=numberOfParts" })
  numberOfParts?: number;

  @Metadata({ data: "json, name=protocolId" })
  protocolId?: number;

  @Metadata({ data: "json, name=relatedSentMessageId" })
  relatedSentMessageId?: string;

  @Metadata({ data: "json, name=status" })
  status: MessageStatus;

  @Metadata({ data: "json, name=submission" })
  submission?: MessageSubmission;

  @Metadata({ data: "json, name=to" })
  to: string;

  @Metadata({ data: "json, name=type" })
  type: MessageTypeEnum;

  @Metadata({ data: "json, name=userSuppliedId" })
  userSuppliedId?: string;
}
