package shared

// RollbackTransactionResponse
// The response elements represent the output of a request to perform a rollback of a transaction.
type RollbackTransactionResponse struct {
	TransactionStatus *string `json:"transactionStatus,omitempty"`
}
