package shared

type StartTransactionResult struct {
	TimingInformation *TimingInformation `json:"TimingInformation,omitempty"`
	TransactionID     *string            `json:"TransactionId,omitempty"`
}
