package shared

import (
	"time"
)

type UpdateRouteCalculatorResponse struct {
	CalculatorArn  string    `json:"CalculatorArn"`
	CalculatorName string    `json:"CalculatorName"`
	UpdateTime     time.Time `json:"UpdateTime"`
}
