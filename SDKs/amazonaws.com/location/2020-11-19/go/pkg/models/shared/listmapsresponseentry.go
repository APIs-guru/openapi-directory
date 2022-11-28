package shared

import (
	"time"
)

// ListMapsResponseEntry
// Contains details of an existing map resource in your AWS account.
type ListMapsResponseEntry struct {
	CreateTime  time.Time       `json:"CreateTime"`
	DataSource  string          `json:"DataSource"`
	Description string          `json:"Description"`
	MapName     string          `json:"MapName"`
	PricingPlan PricingPlanEnum `json:"PricingPlan"`
	UpdateTime  time.Time       `json:"UpdateTime"`
}
