package shared

type ResultSetMetadata struct {
	ColumnCount    *int64           `json:"columnCount"`
	ColumnMetadata []ColumnMetadata `json:"columnMetadata"`
}
