package shared



type SendCommandResult struct {
    AbortTransaction *AbortTransactionResult `json:"AbortTransaction,omitempty"`
    CommitTransaction *CommitTransactionResult `json:"CommitTransaction,omitempty"`
    EndSession *EndSessionResult `json:"EndSession,omitempty"`
    ExecuteStatement *ExecuteStatementResult `json:"ExecuteStatement,omitempty"`
    FetchPage *FetchPageResult `json:"FetchPage,omitempty"`
    StartSession *StartSessionResult `json:"StartSession,omitempty"`
    StartTransaction *StartTransactionResult `json:"StartTransaction,omitempty"`
    
}

