package shared

// CommitTransactionResponse
// The response elements represent the output of a commit transaction request.
type CommitTransactionResponse struct {
	TransactionStatus *string `json:"transactionStatus,omitempty"`
}
