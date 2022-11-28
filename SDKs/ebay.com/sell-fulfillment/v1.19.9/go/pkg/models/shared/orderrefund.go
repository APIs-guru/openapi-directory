package shared

// OrderRefund
// This type contains information about a refund issued for an order. This does not include line item level refunds.
type OrderRefund struct {
	Amount            *Amount `json:"amount,omitempty"`
	RefundDate        *string `json:"refundDate,omitempty"`
	RefundID          *string `json:"refundId,omitempty"`
	RefundReferenceID *string `json:"refundReferenceId,omitempty"`
	RefundStatus      *string `json:"refundStatus,omitempty"`
}
