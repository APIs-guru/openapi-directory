package shared

import (
	"time"
)

type EventTrackerSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	EventTrackerArn     *string    `json:"eventTrackerArn,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	Status              *string    `json:"status,omitempty"`
}
