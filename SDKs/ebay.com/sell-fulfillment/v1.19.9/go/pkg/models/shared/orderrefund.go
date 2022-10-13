package shared

type OrderRefund struct {
	Amount            *Amount `json:"amount"`
	RefundDate        *string `json:"refundDate"`
	RefundID          *string `json:"refundId"`
	RefundReferenceID *string `json:"refundReferenceId"`
	RefundStatus      *string `json:"refundStatus"`
}
