package shared

// LineItemReference
// This type identifies the line item and quantity of that line item that comprises one fulfillment, such as a shipping package.
type LineItemReference struct {
	LineItemID *string `json:"lineItemId,omitempty"`
	Quantity   *int32  `json:"quantity,omitempty"`
}
