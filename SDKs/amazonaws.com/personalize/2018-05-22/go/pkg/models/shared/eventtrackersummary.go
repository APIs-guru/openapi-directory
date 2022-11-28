package shared

import (
	"time"
)

// EventTrackerSummary
// Provides a summary of the properties of an event tracker. For a complete listing, call the <a>DescribeEventTracker</a> API.
type EventTrackerSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	EventTrackerArn     *string    `json:"eventTrackerArn,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	Status              *string    `json:"status,omitempty"`
}
