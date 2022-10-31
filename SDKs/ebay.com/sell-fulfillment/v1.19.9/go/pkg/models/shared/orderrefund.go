package shared

type OrderRefund struct {
	Amount            *Amount `json:"amount,omitempty"`
	RefundDate        *string `json:"refundDate,omitempty"`
	RefundID          *string `json:"refundId,omitempty"`
	RefundReferenceID *string `json:"refundReferenceId,omitempty"`
	RefundStatus      *string `json:"refundStatus,omitempty"`
}
