package shared

// CommitTransactionResult
// Contains the details of the committed transaction.
type CommitTransactionResult struct {
	CommitDigest      *string            `json:"CommitDigest,omitempty"`
	ConsumedIOs       *IoUsage           `json:"ConsumedIOs,omitempty"`
	TimingInformation *TimingInformation `json:"TimingInformation,omitempty"`
	TransactionID     *string            `json:"TransactionId,omitempty"`
}
