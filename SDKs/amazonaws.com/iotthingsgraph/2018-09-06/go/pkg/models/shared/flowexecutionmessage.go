package shared

import (
"time")

type FlowExecutionMessage struct {
    EventType *FlowExecutionEventTypeEnum `json:"eventType,omitempty"`
    MessageID *string `json:"messageId,omitempty"`
    Payload *string `json:"payload,omitempty"`
    Timestamp *time.Time `json:"timestamp,omitempty"`
    
}

