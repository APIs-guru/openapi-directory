package shared

// ResultFrame
// The result set returned by a SQL statement.
type ResultFrame struct {
	Records           []Record           `json:"records,omitempty"`
	ResultSetMetadata *ResultSetMetadata `json:"resultSetMetadata,omitempty"`
}
