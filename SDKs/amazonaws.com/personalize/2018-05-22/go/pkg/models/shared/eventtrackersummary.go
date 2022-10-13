package shared

import (
	"time"
)

type EventTrackerSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime"`
	EventTrackerArn     *string    `json:"eventTrackerArn"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Name                *string    `json:"name"`
	Status              *string    `json:"status"`
}
