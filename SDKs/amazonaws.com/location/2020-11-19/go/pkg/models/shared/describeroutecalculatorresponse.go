package shared

import (
	"time"
)

type DescribeRouteCalculatorResponse struct {
	CalculatorArn  string            `json:"CalculatorArn"`
	CalculatorName string            `json:"CalculatorName"`
	CreateTime     time.Time         `json:"CreateTime"`
	DataSource     string            `json:"DataSource"`
	Description    string            `json:"Description"`
	PricingPlan    PricingPlanEnum   `json:"PricingPlan"`
	Tags           map[string]string `json:"Tags"`
	UpdateTime     time.Time         `json:"UpdateTime"`
}
