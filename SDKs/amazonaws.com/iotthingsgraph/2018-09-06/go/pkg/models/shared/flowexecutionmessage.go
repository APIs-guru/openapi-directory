package shared

import (
	"time"
)

// FlowExecutionMessage
// An object that contains information about a flow event.
type FlowExecutionMessage struct {
	EventType *FlowExecutionEventTypeEnum `json:"eventType,omitempty"`
	MessageID *string                     `json:"messageId,omitempty"`
	Payload   *string                     `json:"payload,omitempty"`
	Timestamp *time.Time                  `json:"timestamp,omitempty"`
}
