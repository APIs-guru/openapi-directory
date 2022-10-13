package shared

type StartTransactionResult struct {
	TimingInformation *TimingInformation `json:"TimingInformation"`
	TransactionID     *string            `json:"TransactionId"`
}
