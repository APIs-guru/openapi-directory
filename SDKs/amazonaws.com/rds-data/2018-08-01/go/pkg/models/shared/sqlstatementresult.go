package shared

type SQLStatementResult struct {
	NumberOfRecordsUpdated *int64       `json:"numberOfRecordsUpdated"`
	ResultFrame            *ResultFrame `json:"resultFrame"`
}
