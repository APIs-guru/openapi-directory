package shared

import (
	"time"
)

type EventTracker struct {
	AccountID           *string    `json:"accountId,omitempty"`
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	DatasetGroupArn     *string    `json:"datasetGroupArn,omitempty"`
	EventTrackerArn     *string    `json:"eventTrackerArn,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	Status              *string    `json:"status,omitempty"`
	TrackingID          *string    `json:"trackingId,omitempty"`
}
