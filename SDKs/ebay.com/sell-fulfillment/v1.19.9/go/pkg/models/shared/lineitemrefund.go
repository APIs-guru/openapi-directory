package shared

// LineItemRefund
// This type contains refund information for a line item.
type LineItemRefund struct {
	Amount            *Amount `json:"amount,omitempty"`
	RefundDate        *string `json:"refundDate,omitempty"`
	RefundID          *string `json:"refundId,omitempty"`
	RefundReferenceID *string `json:"refundReferenceId,omitempty"`
}
