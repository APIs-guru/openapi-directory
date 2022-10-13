package shared

import (
	"time"
)

type EventTracker struct {
	AccountID           *string    `json:"accountId"`
	CreationDateTime    *time.Time `json:"creationDateTime"`
	DatasetGroupArn     *string    `json:"datasetGroupArn"`
	EventTrackerArn     *string    `json:"eventTrackerArn"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Name                *string    `json:"name"`
	Status              *string    `json:"status"`
	TrackingID          *string    `json:"trackingId"`
}
