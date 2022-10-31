package shared

type ResultSetMetadata struct {
	ColumnCount    *int64           `json:"columnCount,omitempty"`
	ColumnMetadata []ColumnMetadata `json:"columnMetadata,omitempty"`
}
