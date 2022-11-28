package shared

// IssueRefundRequest
// The base type used by the request payload of the issueRefund method.
type IssueRefundRequest struct {
	Comment                *string       `json:"comment,omitempty"`
	OrderLevelRefundAmount *SimpleAmount `json:"orderLevelRefundAmount,omitempty"`
	ReasonForRefund        *string       `json:"reasonForRefund,omitempty"`
	RefundItems            []RefundItem  `json:"refundItems,omitempty"`
}
