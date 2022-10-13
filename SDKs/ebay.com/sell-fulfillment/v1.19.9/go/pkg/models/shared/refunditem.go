package shared

type RefundItem struct {
	LegacyReference *LegacyReference `json:"legacyReference"`
	LineItemID      *string          `json:"lineItemId"`
	RefundAmount    *SimpleAmount    `json:"refundAmount"`
}
