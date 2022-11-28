package shared

// ExecuteStatementResponse
// The response elements represent the output of a request to run a SQL statement against a database.
type ExecuteStatementResponse struct {
	ColumnMetadata         []ColumnMetadata `json:"columnMetadata,omitempty"`
	GeneratedFields        []Field          `json:"generatedFields,omitempty"`
	NumberOfRecordsUpdated *int64           `json:"numberOfRecordsUpdated,omitempty"`
	Records                [][]Field        `json:"records,omitempty"`
}
