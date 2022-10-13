package shared

type SendCommandRequest struct {
	AbortTransaction  map[string]interface{}    `json:"AbortTransaction"`
	CommitTransaction *CommitTransactionRequest `json:"CommitTransaction"`
	EndSession        map[string]interface{}    `json:"EndSession"`
	ExecuteStatement  *ExecuteStatementRequest  `json:"ExecuteStatement"`
	FetchPage         *FetchPageRequest         `json:"FetchPage"`
	SessionToken      *string                   `json:"SessionToken"`
	StartSession      *StartSessionRequest      `json:"StartSession"`
	StartTransaction  map[string]interface{}    `json:"StartTransaction"`
}
