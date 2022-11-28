package shared

import (
	"time"
)

// RelationalDatabaseEvent
// Describes an event for a database.
type RelationalDatabaseEvent struct {
	CreatedAt       *time.Time `json:"createdAt,omitempty"`
	EventCategories []string   `json:"eventCategories,omitempty"`
	Message         *string    `json:"message,omitempty"`
	Resource        *string    `json:"resource,omitempty"`
}
