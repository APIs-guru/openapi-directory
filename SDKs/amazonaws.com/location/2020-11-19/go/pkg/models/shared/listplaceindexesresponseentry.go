package shared

import (
	"time"
)

type ListPlaceIndexesResponseEntry struct {
	CreateTime  time.Time       `json:"CreateTime"`
	DataSource  string          `json:"DataSource"`
	Description string          `json:"Description"`
	IndexName   string          `json:"IndexName"`
	PricingPlan PricingPlanEnum `json:"PricingPlan"`
	UpdateTime  time.Time       `json:"UpdateTime"`
}
