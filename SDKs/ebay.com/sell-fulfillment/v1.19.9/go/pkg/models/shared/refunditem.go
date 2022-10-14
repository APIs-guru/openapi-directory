package shared

type RefundItem struct {
	LegacyReference *LegacyReference `json:"legacyReference,omitempty"`
	LineItemID      *string          `json:"lineItemId,omitempty"`
	RefundAmount    *SimpleAmount    `json:"refundAmount,omitempty"`
}
