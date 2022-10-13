package shared

type OrderLineItem struct {
	FeeBasisAmount  *Amount `json:"feeBasisAmount"`
	LineItemID      *string `json:"lineItemId"`
	MarketplaceFees []Fee   `json:"marketplaceFees"`
}
