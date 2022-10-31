package shared

import (
"time")

type PaymentLineItemEntity struct {
    Amount *float64 `json:"amount,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    InvoiceID *int32 `json:"invoice_id,omitempty"`
    PaymentID *int32 `json:"payment_id,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    
}

