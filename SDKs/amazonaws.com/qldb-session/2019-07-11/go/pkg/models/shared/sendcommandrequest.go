package shared



type SendCommandRequest struct {
    AbortTransaction map[string]interface{} `json:"AbortTransaction,omitempty"`
    CommitTransaction *CommitTransactionRequest `json:"CommitTransaction,omitempty"`
    EndSession map[string]interface{} `json:"EndSession,omitempty"`
    ExecuteStatement *ExecuteStatementRequest `json:"ExecuteStatement,omitempty"`
    FetchPage *FetchPageRequest `json:"FetchPage,omitempty"`
    SessionToken *string `json:"SessionToken,omitempty"`
    StartSession *StartSessionRequest `json:"StartSession,omitempty"`
    StartTransaction map[string]interface{} `json:"StartTransaction,omitempty"`
    
}

