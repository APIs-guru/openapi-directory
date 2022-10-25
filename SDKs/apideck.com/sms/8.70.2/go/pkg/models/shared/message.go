package shared

import (
	"time"
)

type MessageDirectionEnum string

const (
	MessageDirectionEnumInbound       MessageDirectionEnum = "inbound"
	MessageDirectionEnumOutboundAPI   MessageDirectionEnum = "outbound-api"
	MessageDirectionEnumOutboundCall  MessageDirectionEnum = "outbound-call"
	MessageDirectionEnumOutboundReply MessageDirectionEnum = "outbound-reply"
	MessageDirectionEnumUnknown       MessageDirectionEnum = "unknown"
)

type MessageError struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type MessagePrice struct {
	Currency    *CurrencyEnum `json:"currency,omitempty"`
	PerUnit     *string       `json:"per_unit,omitempty"`
	TotalAmount *string       `json:"total_amount,omitempty"`
}

type MessageStatusEnum string

const (
	MessageStatusEnumAccepted    MessageStatusEnum = "accepted"
	MessageStatusEnumScheduled   MessageStatusEnum = "scheduled"
	MessageStatusEnumCanceled    MessageStatusEnum = "canceled"
	MessageStatusEnumQueued      MessageStatusEnum = "queued"
	MessageStatusEnumSending     MessageStatusEnum = "sending"
	MessageStatusEnumSent        MessageStatusEnum = "sent"
	MessageStatusEnumFailed      MessageStatusEnum = "failed"
	MessageStatusEnumDelivered   MessageStatusEnum = "delivered"
	MessageStatusEnumUndelivered MessageStatusEnum = "undelivered"
	MessageStatusEnumReceiving   MessageStatusEnum = "receiving"
	MessageStatusEnumReceived    MessageStatusEnum = "received"
	MessageStatusEnumRead        MessageStatusEnum = "read"
)

type MessageMessageTypeEnum string

const (
	MessageMessageTypeEnumSms MessageMessageTypeEnum = "sms"
	MessageMessageTypeEnumMms MessageMessageTypeEnum = "mms"
)

type Message struct {
	Body               string                  `json:"body"`
	CreatedAt          *time.Time              `json:"created_at,omitempty"`
	CreatedBy          *string                 `json:"created_by,omitempty"`
	Direction          *MessageDirectionEnum   `json:"direction,omitempty"`
	Error              *MessageError           `json:"error,omitempty"`
	From               string                  `json:"from"`
	ID                 *string                 `json:"id,omitempty"`
	MessagingServiceID *string                 `json:"messaging_service_id,omitempty"`
	NumberOfMediaFiles *int64                  `json:"number_of_media_files,omitempty"`
	NumberOfUnits      *int64                  `json:"number_of_units,omitempty"`
	Price              *MessagePrice           `json:"price,omitempty"`
	Reference          *string                 `json:"reference,omitempty"`
	ScheduledAt        *time.Time              `json:"scheduled_at,omitempty"`
	SentAt             *time.Time              `json:"sent_at,omitempty"`
	Status             *MessageStatusEnum      `json:"status,omitempty"`
	Subject            *string                 `json:"subject,omitempty"`
	To                 string                  `json:"to"`
	Type               *MessageMessageTypeEnum `json:"type,omitempty"`
	UpdatedAt          *time.Time              `json:"updated_at,omitempty"`
	UpdatedBy          *string                 `json:"updated_by,omitempty"`
	WebhookURL         *string                 `json:"webhook_url,omitempty"`
}
