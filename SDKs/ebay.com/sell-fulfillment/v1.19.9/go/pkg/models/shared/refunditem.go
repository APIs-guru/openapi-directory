package shared

// RefundItem
// This type is used if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the orderLevelRefundAmount container to specify the amount of the refund for the entire order.
type RefundItem struct {
	LegacyReference *LegacyReference `json:"legacyReference,omitempty"`
	LineItemID      *string          `json:"lineItemId,omitempty"`
	RefundAmount    *SimpleAmount    `json:"refundAmount,omitempty"`
}
