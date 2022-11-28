package shared

// PaymentDisputeOutcomeDetail
// This type is used by the resolution container that is returned for payment disputes that have been resolved.
type PaymentDisputeOutcomeDetail struct {
	Fees             *SimpleAmount `json:"fees,omitempty"`
	ProtectedAmount  *SimpleAmount `json:"protectedAmount,omitempty"`
	ProtectionStatus *string       `json:"protectionStatus,omitempty"`
	ReasonForClosure *string       `json:"reasonForClosure,omitempty"`
	RecoupAmount     *SimpleAmount `json:"recoupAmount,omitempty"`
	TotalFeeCredit   *SimpleAmount `json:"totalFeeCredit,omitempty"`
}
