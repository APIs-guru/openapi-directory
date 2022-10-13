package shared

type ExecuteStatementRequest struct {
	Parameters    []ValueHolder `json:"Parameters"`
	Statement     string        `json:"Statement"`
	TransactionID string        `json:"TransactionId"`
}
