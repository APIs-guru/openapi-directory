package shared

type SendCommandResult struct {
	AbortTransaction  *AbortTransactionResult  `json:"AbortTransaction"`
	CommitTransaction *CommitTransactionResult `json:"CommitTransaction"`
	EndSession        *EndSessionResult        `json:"EndSession"`
	ExecuteStatement  *ExecuteStatementResult  `json:"ExecuteStatement"`
	FetchPage         *FetchPageResult         `json:"FetchPage"`
	StartSession      *StartSessionResult      `json:"StartSession"`
	StartTransaction  *StartTransactionResult  `json:"StartTransaction"`
}
