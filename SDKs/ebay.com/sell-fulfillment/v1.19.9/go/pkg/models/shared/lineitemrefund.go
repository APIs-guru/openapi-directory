package shared

type LineItemRefund struct {
	Amount            *Amount `json:"amount,omitempty"`
	RefundDate        *string `json:"refundDate,omitempty"`
	RefundID          *string `json:"refundId,omitempty"`
	RefundReferenceID *string `json:"refundReferenceId,omitempty"`
}
