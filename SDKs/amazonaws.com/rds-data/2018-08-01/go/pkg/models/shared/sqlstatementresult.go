package shared

type SQLStatementResult struct {
	NumberOfRecordsUpdated *int64       `json:"numberOfRecordsUpdated,omitempty"`
	ResultFrame            *ResultFrame `json:"resultFrame,omitempty"`
}
