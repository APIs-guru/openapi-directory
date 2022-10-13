package shared

type PaymentDisputeOutcomeDetail struct {
	Fees             *SimpleAmount `json:"fees"`
	ProtectedAmount  *SimpleAmount `json:"protectedAmount"`
	ProtectionStatus *string       `json:"protectionStatus"`
	ReasonForClosure *string       `json:"reasonForClosure"`
	RecoupAmount     *SimpleAmount `json:"recoupAmount"`
	TotalFeeCredit   *SimpleAmount `json:"totalFeeCredit"`
}
