package shared

import (
"time")

type OrderDetail struct {
    Assets []AssetIDFromOrder `json:"assets,omitempty"`
    EndClient *string `json:"end_client,omitempty"`
    ID *string `json:"id,omitempty"`
    InvoiceNumber *string `json:"invoice_number,omitempty"`
    Notes *OrderNotes `json:"notes,omitempty"`
    OrderDate *time.Time `json:"order_date,omitempty"`
    
}

