package shared

type CommitTransactionResult struct {
	CommitDigest      *string            `json:"CommitDigest"`
	ConsumedIOs       *IoUsage           `json:"ConsumedIOs"`
	TimingInformation *TimingInformation `json:"TimingInformation"`
	TransactionID     *string            `json:"TransactionId"`
}
