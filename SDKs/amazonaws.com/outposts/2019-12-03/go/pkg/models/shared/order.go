package shared

import (
	"time"
)

// Order
// Information about an order.
type Order struct {
	LineItems           []LineItem         `json:"LineItems,omitempty"`
	OrderFulfilledDate  *time.Time         `json:"OrderFulfilledDate,omitempty"`
	OrderID             *string            `json:"OrderId,omitempty"`
	OrderSubmissionDate *time.Time         `json:"OrderSubmissionDate,omitempty"`
	OutpostID           *string            `json:"OutpostId,omitempty"`
	PaymentOption       *PaymentOptionEnum `json:"PaymentOption,omitempty"`
	Status              *OrderStatusEnum   `json:"Status,omitempty"`
}
