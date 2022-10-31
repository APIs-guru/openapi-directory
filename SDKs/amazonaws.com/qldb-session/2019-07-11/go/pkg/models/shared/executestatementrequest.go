package shared



type ExecuteStatementRequest struct {
    Parameters []ValueHolder `json:"Parameters,omitempty"`
    Statement string `json:"Statement"`
    TransactionID string `json:"TransactionId"`
    
}

