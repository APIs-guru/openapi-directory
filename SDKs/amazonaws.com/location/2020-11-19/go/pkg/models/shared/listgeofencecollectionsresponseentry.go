package shared

import (
	"time"
)

type ListGeofenceCollectionsResponseEntry struct {
	CollectionName        string          `json:"CollectionName"`
	CreateTime            time.Time       `json:"CreateTime"`
	Description           string          `json:"Description"`
	PricingPlan           PricingPlanEnum `json:"PricingPlan"`
	PricingPlanDataSource *string         `json:"PricingPlanDataSource,omitempty"`
	UpdateTime            time.Time       `json:"UpdateTime"`
}
