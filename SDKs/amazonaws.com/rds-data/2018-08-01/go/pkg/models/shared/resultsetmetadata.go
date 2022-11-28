package shared

// ResultSetMetadata
// The metadata of the result set returned by a SQL statement.
type ResultSetMetadata struct {
	ColumnCount    *int64           `json:"columnCount,omitempty"`
	ColumnMetadata []ColumnMetadata `json:"columnMetadata,omitempty"`
}
