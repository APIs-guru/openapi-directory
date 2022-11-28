package shared

import (
	"time"
)

// AccountLineItemEntity
// List Payments
type AccountLineItemEntity struct {
	Amount            *float64               `json:"amount,omitempty"`
	Balance           *float64               `json:"balance,omitempty"`
	CreatedAt         *time.Time             `json:"created_at,omitempty"`
	Currency          *string                `json:"currency,omitempty"`
	DownloadURI       *string                `json:"download_uri,omitempty"`
	ID                *int32                 `json:"id,omitempty"`
	InvoiceLineItems  *InvoiceLineItemEntity `json:"invoice_line_items,omitempty"`
	Method            *string                `json:"method,omitempty"`
	PaymentLineItems  *PaymentLineItemEntity `json:"payment_line_items,omitempty"`
	PaymentReversedAt *time.Time             `json:"payment_reversed_at,omitempty"`
	PaymentType       *string                `json:"payment_type,omitempty"`
	SiteName          *string                `json:"site_name,omitempty"`
	Type              *string                `json:"type,omitempty"`
	UpdatedAt         *time.Time             `json:"updated_at,omitempty"`
}
