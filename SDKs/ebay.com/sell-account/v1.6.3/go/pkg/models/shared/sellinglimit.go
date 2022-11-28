package shared

// SellingLimit
// Defines the selling limit applied to an eBay seller's account.
type SellingLimit struct {
	Amount   *Amount `json:"amount,omitempty"`
	Quantity *int32  `json:"quantity,omitempty"`
}
