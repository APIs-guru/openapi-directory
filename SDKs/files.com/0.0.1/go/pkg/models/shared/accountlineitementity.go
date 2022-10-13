package shared

import (
	"time"
)

type AccountLineItemEntity struct {
	Amount            *float64               `json:"amount"`
	Balance           *float64               `json:"balance"`
	CreatedAt         *time.Time             `json:"created_at"`
	Currency          *string                `json:"currency"`
	DownloadURI       *string                `json:"download_uri"`
	ID                *int32                 `json:"id"`
	InvoiceLineItems  *InvoiceLineItemEntity `json:"invoice_line_items"`
	Method            *string                `json:"method"`
	PaymentLineItems  *PaymentLineItemEntity `json:"payment_line_items"`
	PaymentReversedAt *time.Time             `json:"payment_reversed_at"`
	PaymentType       *string                `json:"payment_type"`
	SiteName          *string                `json:"site_name"`
	Type              *string                `json:"type"`
	UpdatedAt         *time.Time             `json:"updated_at"`
}
