package shared

import (
	"time"
)

type MessageEncodingEnum string

const (
	MessageEncodingEnumText    MessageEncodingEnum = "TEXT"
	MessageEncodingEnumUnicode MessageEncodingEnum = "UNICODE"
	MessageEncodingEnumBinary  MessageEncodingEnum = "BINARY"
)

type MessageStatusSubtypeEnum string

const (
	MessageStatusSubtypeEnumExpired      MessageStatusSubtypeEnum = "EXPIRED"
	MessageStatusSubtypeEnumHandsetError MessageStatusSubtypeEnum = "HANDSET_ERROR"
	MessageStatusSubtypeEnumBlocked      MessageStatusSubtypeEnum = "BLOCKED"
	MessageStatusSubtypeEnumNotSent      MessageStatusSubtypeEnum = "NOT_SENT"
)

type MessageStatusTypeEnum string

const (
	MessageStatusTypeEnumAccepted  MessageStatusTypeEnum = "ACCEPTED"
	MessageStatusTypeEnumScheduled MessageStatusTypeEnum = "SCHEDULED"
	MessageStatusTypeEnumSent      MessageStatusTypeEnum = "SENT"
	MessageStatusTypeEnumDelivered MessageStatusTypeEnum = "DELIVERED"
	MessageStatusTypeEnumUnknown   MessageStatusTypeEnum = "UNKNOWN"
	MessageStatusTypeEnumFailed    MessageStatusTypeEnum = "FAILED"
)

type MessageStatus struct {
	ID      string                    `json:"id"`
	Subtype *MessageStatusSubtypeEnum `json:"subtype"`
	Type    MessageStatusTypeEnum     `json:"type"`
}

type MessageSubmission struct {
	Date time.Time `json:"date"`
	ID   string    `json:"id"`
}

type MessageTypeEnum string

const (
	MessageTypeEnumSent     MessageTypeEnum = "SENT"
	MessageTypeEnumReceived MessageTypeEnum = "RECEIVED"
)

type Message struct {
	Body                 interface{}          `json:"body"`
	CreditCost           *float32             `json:"creditCost"`
	Encoding             *MessageEncodingEnum `json:"encoding"`
	From                 *string              `json:"from"`
	ID                   string               `json:"id"`
	MessageClass         *int32               `json:"messageClass"`
	NumberOfParts        *int32               `json:"numberOfParts"`
	ProtocolID           *int32               `json:"protocolId"`
	RelatedSentMessageID *string              `json:"relatedSentMessageId"`
	Status               MessageStatus        `json:"status"`
	Submission           *MessageSubmission   `json:"submission"`
	To                   string               `json:"to"`
	Type                 MessageTypeEnum      `json:"type"`
	UserSuppliedID       *string              `json:"userSuppliedId"`
}
