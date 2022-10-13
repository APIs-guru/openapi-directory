package shared

type LineItemRefund struct {
	Amount            *Amount `json:"amount"`
	RefundDate        *string `json:"refundDate"`
	RefundID          *string `json:"refundId"`
	RefundReferenceID *string `json:"refundReferenceId"`
}
