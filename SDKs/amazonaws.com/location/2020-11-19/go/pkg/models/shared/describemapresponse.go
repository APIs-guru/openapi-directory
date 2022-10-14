package shared

import (
	"time"
)

type DescribeMapResponse struct {
	Configuration MapConfiguration  `json:"Configuration"`
	CreateTime    time.Time         `json:"CreateTime"`
	DataSource    string            `json:"DataSource"`
	Description   string            `json:"Description"`
	MapArn        string            `json:"MapArn"`
	MapName       string            `json:"MapName"`
	PricingPlan   PricingPlanEnum   `json:"PricingPlan"`
	Tags          map[string]string `json:"Tags,omitempty"`
	UpdateTime    time.Time         `json:"UpdateTime"`
}
