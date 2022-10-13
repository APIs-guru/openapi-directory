package shared

type CommitTransactionRequest struct {
	CommitDigest  string `json:"CommitDigest"`
	TransactionID string `json:"TransactionId"`
}
