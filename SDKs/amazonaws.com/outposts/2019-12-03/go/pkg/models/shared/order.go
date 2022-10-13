package shared

import (
	"time"
)

type Order struct {
	LineItems           []LineItem         `json:"LineItems"`
	OrderFulfilledDate  *time.Time         `json:"OrderFulfilledDate"`
	OrderID             *string            `json:"OrderId"`
	OrderSubmissionDate *time.Time         `json:"OrderSubmissionDate"`
	OutpostID           *string            `json:"OutpostId"`
	PaymentOption       *PaymentOptionEnum `json:"PaymentOption"`
	Status              *OrderStatusEnum   `json:"Status"`
}
