package shared

type ReceiptLineItem struct {
	ItemDescription *string  `json:"ItemDescription,omitempty"`
	ItemPrice       *float64 `json:"ItemPrice,omitempty"`
}
