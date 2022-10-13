package shared

type IssueRefundRequest struct {
	Comment                *string       `json:"comment"`
	OrderLevelRefundAmount *SimpleAmount `json:"orderLevelRefundAmount"`
	ReasonForRefund        *string       `json:"reasonForRefund"`
	RefundItems            []RefundItem  `json:"refundItems"`
}
