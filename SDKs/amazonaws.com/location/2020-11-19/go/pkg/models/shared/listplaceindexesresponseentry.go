package shared

import (
	"time"
)

// ListPlaceIndexesResponseEntry
// A place index resource listed in your AWS account.
type ListPlaceIndexesResponseEntry struct {
	CreateTime  time.Time       `json:"CreateTime"`
	DataSource  string          `json:"DataSource"`
	Description string          `json:"Description"`
	IndexName   string          `json:"IndexName"`
	PricingPlan PricingPlanEnum `json:"PricingPlan"`
	UpdateTime  time.Time       `json:"UpdateTime"`
}
