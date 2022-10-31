package shared



type ExecuteStatementResponse struct {
    ColumnMetadata []ColumnMetadata `json:"columnMetadata,omitempty"`
    GeneratedFields []Field `json:"generatedFields,omitempty"`
    NumberOfRecordsUpdated *int64 `json:"numberOfRecordsUpdated,omitempty"`
    Records [][]Field `json:"records,omitempty"`
    
}

