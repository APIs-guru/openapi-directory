package shared

import (
	"time"
)

type FlowExecutionMessage struct {
	EventType *FlowExecutionEventTypeEnum `json:"eventType"`
	MessageID *string                     `json:"messageId"`
	Payload   *string                     `json:"payload"`
	Timestamp *time.Time                  `json:"timestamp"`
}
