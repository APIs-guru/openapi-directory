package shared

import (
"time")

type ListTrackersResponseEntry struct {
    CreateTime time.Time `json:"CreateTime"`
    Description string `json:"Description"`
    PricingPlan PricingPlanEnum `json:"PricingPlan"`
    PricingPlanDataSource *string `json:"PricingPlanDataSource,omitempty"`
    TrackerName string `json:"TrackerName"`
    UpdateTime time.Time `json:"UpdateTime"`
    
}

