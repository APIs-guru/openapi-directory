package shared

// StartTransactionResult
// Contains the details of the started transaction.
type StartTransactionResult struct {
	TimingInformation *TimingInformation `json:"TimingInformation,omitempty"`
	TransactionID     *string            `json:"TransactionId,omitempty"`
}
