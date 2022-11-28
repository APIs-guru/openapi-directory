package shared

// AbortTransactionResult
// Contains the details of the aborted transaction.
type AbortTransactionResult struct {
	TimingInformation *TimingInformation `json:"TimingInformation,omitempty"`
}
