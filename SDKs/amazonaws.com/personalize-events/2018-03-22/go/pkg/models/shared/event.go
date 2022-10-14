package shared

import (
	"time"
)

type Event struct {
	EventID          *string      `json:"eventId,omitempty"`
	EventType        string       `json:"eventType"`
	EventValue       *float32     `json:"eventValue,omitempty"`
	Impression       []string     `json:"impression,omitempty"`
	ItemID           *string      `json:"itemId,omitempty"`
	Properties       *interface{} `json:"properties,omitempty"`
	RecommendationID *string      `json:"recommendationId,omitempty"`
	SentAt           time.Time    `json:"sentAt"`
}
