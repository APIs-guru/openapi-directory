package shared

type OrderLineItem struct {
	FeeBasisAmount  *Amount `json:"feeBasisAmount,omitempty"`
	LineItemID      *string `json:"lineItemId,omitempty"`
	MarketplaceFees []Fee   `json:"marketplaceFees,omitempty"`
}
