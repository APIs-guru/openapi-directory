package shared

import (
	"time"
)

type OrderDetail struct {
	Assets        []AssetIDFromOrder `json:"assets"`
	EndClient     *string            `json:"end_client"`
	ID            *string            `json:"id"`
	InvoiceNumber *string            `json:"invoice_number"`
	Notes         *OrderNotes        `json:"notes"`
	OrderDate     *time.Time         `json:"order_date"`
}
