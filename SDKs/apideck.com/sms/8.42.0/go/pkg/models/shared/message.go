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
	Code    *string `json:"code"`
	Message *string `json:"message"`
}

type MessagePricePrice struct {
	Currency    *CurrencyEnum `json:"currency"`
	PerUnit     *string       `json:"per_unit"`
	TotalAmount *string       `json:"total_amount"`
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
	CreatedAt          *time.Time                     `json:"created_at"`
	CreatedBy          *string                        `json:"created_by"`
	Direction          *MessageDirectionDirectionEnum `json:"direction"`
	Error              *MessageErrorError             `json:"error"`
	From               string                         `json:"from"`
	ID                 *string                        `json:"id"`
	MessagingServiceID *string                        `json:"messaging_service_id"`
	NumberOfMediaFiles *int64                         `json:"number_of_media_files"`
	NumberOfUnits      *int64                         `json:"number_of_units"`
	Price              *MessagePricePrice             `json:"price"`
	Reference          *string                        `json:"reference"`
	ScheduledAt        *time.Time                     `json:"scheduled_at"`
	SentAt             *time.Time                     `json:"sent_at"`
	Status             *MessageStatusStatusEnum       `json:"status"`
	Subject            *string                        `json:"subject"`
	To                 string                         `json:"to"`
	Type               *MessageTypeMessageTypeEnum    `json:"type"`
	UpdatedAt          *time.Time                     `json:"updated_at"`
	UpdatedBy          *string                        `json:"updated_by"`
	WebhookURL         *string                        `json:"webhook_url"`
}
