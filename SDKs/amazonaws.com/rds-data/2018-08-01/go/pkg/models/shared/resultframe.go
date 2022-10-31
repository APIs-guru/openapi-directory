package shared

type ResultFrame struct {
	Records           []Record           `json:"records,omitempty"`
	ResultSetMetadata *ResultSetMetadata `json:"resultSetMetadata,omitempty"`
}
