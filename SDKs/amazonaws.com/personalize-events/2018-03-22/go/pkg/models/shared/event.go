package shared

import (
	"time"
)

type Event struct {
	EventID          *string      `json:"eventId"`
	EventType        string       `json:"eventType"`
	EventValue       *float32     `json:"eventValue"`
	Impression       []string     `json:"impression"`
	ItemID           *string      `json:"itemId"`
	Properties       *interface{} `json:"properties"`
	RecommendationID *string      `json:"recommendationId"`
	SentAt           time.Time    `json:"sentAt"`
}
