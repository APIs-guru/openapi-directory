package shared

import (
	"time"
)

// BotLocaleHistoryEvent
// Provides information about an event that occurred affecting the bot locale.
type BotLocaleHistoryEvent struct {
	Event     string    `json:"event"`
	EventDate time.Time `json:"eventDate"`
}
