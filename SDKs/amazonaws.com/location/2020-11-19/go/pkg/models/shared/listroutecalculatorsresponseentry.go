package shared

import (
	"time"
)

// ListRouteCalculatorsResponseEntry
// A route calculator resource listed in your AWS account.
type ListRouteCalculatorsResponseEntry struct {
	CalculatorName string          `json:"CalculatorName"`
	CreateTime     time.Time       `json:"CreateTime"`
	DataSource     string          `json:"DataSource"`
	Description    string          `json:"Description"`
	PricingPlan    PricingPlanEnum `json:"PricingPlan"`
	UpdateTime     time.Time       `json:"UpdateTime"`
}
