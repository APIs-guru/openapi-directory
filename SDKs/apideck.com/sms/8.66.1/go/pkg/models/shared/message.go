package shared

import (
	"time"
)

type MessageDirectionDirectionEnum string

const (
	MessageDirectionDirectionEnumInbound       MessageDirectionDirectionEnum = "inbound"
	MessageDirectionDirectionEnumOutboundAPI   MessageDirectionDirectionEnum = "outbound-api"
	MessageDirectionDirectionEnumOutboundCall  MessageDirectionDirectionEnum = "outbound-call"
	MessageDirectionDirectionEnumOutboundReply MessageDirectionDirectionEnum = "outbound-reply"
	MessageDirectionDirectionEnumUnknown       MessageDirectionDirectionEnum = "unknown"
)

type MessageErrorError struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type MessagePricePrice struct {
	Currency    *CurrencyEnum `json:"currency,omitempty"`
	PerUnit     *string       `json:"per_unit,omitempty"`
	TotalAmount *string       `json:"total_amount,omitempty"`
}

type MessageStatusStatusEnum string

const (
	MessageStatusStatusEnumAccepted    MessageStatusStatusEnum = "accepted"
	MessageStatusStatusEnumScheduled   MessageStatusStatusEnum = "scheduled"
	MessageStatusStatusEnumCanceled    MessageStatusStatusEnum = "canceled"
	MessageStatusStatusEnumQueued      MessageStatusStatusEnum = "queued"
	MessageStatusStatusEnumSending     MessageStatusStatusEnum = "sending"
	MessageStatusStatusEnumSent        MessageStatusStatusEnum = "sent"
	MessageStatusStatusEnumFailed      MessageStatusStatusEnum = "failed"
	MessageStatusStatusEnumDelivered   MessageStatusStatusEnum = "delivered"
	MessageStatusStatusEnumUndelivered MessageStatusStatusEnum = "undelivered"
	MessageStatusStatusEnumReceiving   MessageStatusStatusEnum = "receiving"
	MessageStatusStatusEnumReceived    MessageStatusStatusEnum = "received"
	MessageStatusStatusEnumRead        MessageStatusStatusEnum = "read"
)

type MessageTypeMessageTypeEnum string

const (
	MessageTypeMessageTypeEnumSms MessageTypeMessageTypeEnum = "sms"
	MessageTypeMessageTypeEnumMms MessageTypeMessageTypeEnum = "mms"
)

type Message struct {
	Body               string                         `json:"body"`
	CreatedAt          *time.Time                     `json:"created_at,omitempty"`
	CreatedBy          *string                        `json:"created_by,omitempty"`
	Direction          *MessageDirectionDirectionEnum `json:"direction,omitempty"`
	Error              *MessageErrorError             `json:"error,omitempty"`
	From               string                         `json:"from"`
	ID                 *string                        `json:"id,omitempty"`
	MessagingServiceID *string                        `json:"messaging_service_id,omitempty"`
	NumberOfMediaFiles *int64                         `json:"number_of_media_files,omitempty"`
	NumberOfUnits      *int64                         `json:"number_of_units,omitempty"`
	Price              *MessagePricePrice             `json:"price,omitempty"`
	Reference          *string                        `json:"reference,omitempty"`
	ScheduledAt        *time.Time                     `json:"scheduled_at,omitempty"`
	SentAt             *time.Time                     `json:"sent_at,omitempty"`
	Status             *MessageStatusStatusEnum       `json:"status,omitempty"`
	Subject            *string                        `json:"subject,omitempty"`
	To                 string                         `json:"to"`
	Type               *MessageTypeMessageTypeEnum    `json:"type,omitempty"`
	UpdatedAt          *time.Time                     `json:"updated_at,omitempty"`
	UpdatedBy          *string                        `json:"updated_by,omitempty"`
	WebhookURL         *string                        `json:"webhook_url,omitempty"`
}
