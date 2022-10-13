package shared

type ReceiptLineItem struct {
	ItemDescription *string  `json:"ItemDescription"`
	ItemPrice       *float64 `json:"ItemPrice"`
}
