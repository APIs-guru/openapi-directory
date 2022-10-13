package shared

import (
	"time"
)

type DescribeTrackerResponse struct {
	CreateTime            time.Time         `json:"CreateTime"`
	Description           string            `json:"Description"`
	KmsKeyID              *string           `json:"KmsKeyId"`
	PricingPlan           PricingPlanEnum   `json:"PricingPlan"`
	PricingPlanDataSource *string           `json:"PricingPlanDataSource"`
	Tags                  map[string]string `json:"Tags"`
	TrackerArn            string            `json:"TrackerArn"`
	TrackerName           string            `json:"TrackerName"`
	UpdateTime            time.Time         `json:"UpdateTime"`
}
