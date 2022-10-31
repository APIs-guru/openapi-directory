package shared

import (
"time")


type MessageEncodingEnum string

const (
    MessageEncodingEnumText MessageEncodingEnum = "TEXT"
MessageEncodingEnumUnicode MessageEncodingEnum = "UNICODE"
MessageEncodingEnumBinary MessageEncodingEnum = "BINARY"
)



type MessageStatusSubtypeEnum string

const (
    MessageStatusSubtypeEnumExpired MessageStatusSubtypeEnum = "EXPIRED"
MessageStatusSubtypeEnumHandsetError MessageStatusSubtypeEnum = "HANDSET_ERROR"
MessageStatusSubtypeEnumBlocked MessageStatusSubtypeEnum = "BLOCKED"
MessageStatusSubtypeEnumNotSent MessageStatusSubtypeEnum = "NOT_SENT"
)



type MessageStatusTypeEnum string

const (
    MessageStatusTypeEnumAccepted MessageStatusTypeEnum = "ACCEPTED"
MessageStatusTypeEnumScheduled MessageStatusTypeEnum = "SCHEDULED"
MessageStatusTypeEnumSent MessageStatusTypeEnum = "SENT"
MessageStatusTypeEnumDelivered MessageStatusTypeEnum = "DELIVERED"
MessageStatusTypeEnumUnknown MessageStatusTypeEnum = "UNKNOWN"
MessageStatusTypeEnumFailed MessageStatusTypeEnum = "FAILED"
)


type MessageStatus struct {
    ID string `json:"id"`
    Subtype *MessageStatusSubtypeEnum `json:"subtype,omitempty"`
    Type MessageStatusTypeEnum `json:"type"`
    
}

type MessageSubmission struct {
    Date time.Time `json:"date"`
    ID string `json:"id"`
    
}


type MessageTypeEnum string

const (
    MessageTypeEnumSent MessageTypeEnum = "SENT"
MessageTypeEnumReceived MessageTypeEnum = "RECEIVED"
)


type Message struct {
    Body interface{} `json:"body"`
    CreditCost *float32 `json:"creditCost,omitempty"`
    Encoding *MessageEncodingEnum `json:"encoding,omitempty"`
    From *string `json:"from,omitempty"`
    ID string `json:"id"`
    MessageClass *int32 `json:"messageClass,omitempty"`
    NumberOfParts *int32 `json:"numberOfParts,omitempty"`
    ProtocolID *int32 `json:"protocolId,omitempty"`
    RelatedSentMessageID *string `json:"relatedSentMessageId,omitempty"`
    Status MessageStatus `json:"status"`
    Submission *MessageSubmission `json:"submission,omitempty"`
    To string `json:"to"`
    Type MessageTypeEnum `json:"type"`
    UserSuppliedID *string `json:"userSuppliedId,omitempty"`
    
}

