import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MessageEncodingEnum {
    Text = "TEXT",
    Unicode = "UNICODE",
    Binary = "BINARY"
}

export enum MessageStatusSubtypeEnum {
    Expired = "EXPIRED",
    HandsetError = "HANDSET_ERROR",
    Blocked = "BLOCKED",
    NotSent = "NOT_SENT"
}

export enum MessageStatusTypeEnum {
    Accepted = "ACCEPTED",
    Scheduled = "SCHEDULED",
    Sent = "SENT",
    Delivered = "DELIVERED",
    Unknown = "UNKNOWN",
    Failed = "FAILED"
}


// MessageStatus
/** 
 * The status of the message
**/
export class MessageStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: MessageStatusSubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: MessageStatusTypeEnum;
}


// MessageSubmission
/** 
 * Identifies the submission.
 * 
**/
export class MessageSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

export enum MessageTypeEnum {
    Sent = "SENT",
    Received = "RECEIVED"
}


export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: any;

  @SpeakeasyMetadata({ data: "json, name=creditCost" })
  creditCost?: number;

  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: MessageEncodingEnum;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=messageClass" })
  messageClass?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfParts" })
  numberOfParts?: number;

  @SpeakeasyMetadata({ data: "json, name=protocolId" })
  protocolId?: number;

  @SpeakeasyMetadata({ data: "json, name=relatedSentMessageId" })
  relatedSentMessageId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: MessageStatus;

  @SpeakeasyMetadata({ data: "json, name=submission" })
  submission?: MessageSubmission;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: MessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userSuppliedId" })
  userSuppliedId?: string;
}
