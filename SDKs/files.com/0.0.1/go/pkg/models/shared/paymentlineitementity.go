package shared

import (
	"time"
)

type PaymentLineItemEntity struct {
	Amount    *float64   `json:"amount"`
	CreatedAt *time.Time `json:"created_at"`
	InvoiceID *int32     `json:"invoice_id"`
	PaymentID *int32     `json:"payment_id"`
	UpdatedAt *time.Time `json:"updated_at"`
}
