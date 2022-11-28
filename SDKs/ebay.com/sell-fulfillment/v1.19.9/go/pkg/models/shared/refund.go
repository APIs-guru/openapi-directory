package shared

// Refund
// This is the base type of the issueRefund response payload. As long as the issueRefund method does not trigger an error, a response payload will be returned.
type Refund struct {
	RefundID     *string `json:"refundId,omitempty"`
	RefundStatus *string `json:"refundStatus,omitempty"`
}
