package shared

// ExecuteStatementRequest
// Specifies a request to execute a statement.
type ExecuteStatementRequest struct {
	Parameters    []ValueHolder `json:"Parameters,omitempty"`
	Statement     string        `json:"Statement"`
	TransactionID string        `json:"TransactionId"`
}
