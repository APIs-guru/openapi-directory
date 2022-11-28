package shared

// OrderLineItem
// This type is used to show the fees that are deducted from a seller payout for each line item in an order.
type OrderLineItem struct {
	FeeBasisAmount  *Amount `json:"feeBasisAmount,omitempty"`
	LineItemID      *string `json:"lineItemId,omitempty"`
	MarketplaceFees []Fee   `json:"marketplaceFees,omitempty"`
}
