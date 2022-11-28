package shared

// ReceiptLineItem
// Receipt line item, comprised of a product or item and a price (if available)
type ReceiptLineItem struct {
	ItemDescription *string  `json:"ItemDescription,omitempty"`
	ItemPrice       *float64 `json:"ItemPrice,omitempty"`
}
