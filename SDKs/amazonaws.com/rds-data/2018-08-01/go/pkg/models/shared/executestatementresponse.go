package shared

type ExecuteStatementResponse struct {
	ColumnMetadata         []ColumnMetadata `json:"columnMetadata"`
	GeneratedFields        []Field          `json:"generatedFields"`
	NumberOfRecordsUpdated *int64           `json:"numberOfRecordsUpdated"`
	Records                [][]Field        `json:"records"`
}
