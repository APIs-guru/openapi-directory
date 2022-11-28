package shared

// OrderLineItems
// This type is used by the lineItems array that is used to identify one or more line items in the order with the payment dispute.
type OrderLineItems struct {
	ItemID     *string `json:"itemId,omitempty"`
	LineItemID *string `json:"lineItemId,omitempty"`
}
