package shared

import (
	"time"
)

type CreateRouteCalculatorResponse struct {
	CalculatorArn  string    `json:"CalculatorArn"`
	CalculatorName string    `json:"CalculatorName"`
	CreateTime     time.Time `json:"CreateTime"`
}
