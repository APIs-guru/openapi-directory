package shared

// BeginTransactionResponse
// The response elements represent the output of a request to start a SQL transaction.
type BeginTransactionResponse struct {
	TransactionID *string `json:"transactionId,omitempty"`
}
