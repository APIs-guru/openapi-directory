package shared

// CommitTransactionRequest
// Contains the details of the transaction to commit.
type CommitTransactionRequest struct {
	CommitDigest  string `json:"CommitDigest"`
	TransactionID string `json:"TransactionId"`
}
