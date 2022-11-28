package shared

import (
	"time"
)

// Event
// Describes an event.
type Event struct {
	Date             *time.Time
	EventCategories  []string
	EventID          *string
	Message          *string
	Severity         *string
	SourceIdentifier *string
	SourceType       *SourceTypeEnum
}
