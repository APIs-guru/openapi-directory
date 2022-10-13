package shared

import (
	"time"
)

type DescribeGeofenceCollectionResponse struct {
	CollectionArn         string            `json:"CollectionArn"`
	CollectionName        string            `json:"CollectionName"`
	CreateTime            time.Time         `json:"CreateTime"`
	Description           string            `json:"Description"`
	KmsKeyID              *string           `json:"KmsKeyId"`
	PricingPlan           PricingPlanEnum   `json:"PricingPlan"`
	PricingPlanDataSource *string           `json:"PricingPlanDataSource"`
	Tags                  map[string]string `json:"Tags"`
	UpdateTime            time.Time         `json:"UpdateTime"`
}
