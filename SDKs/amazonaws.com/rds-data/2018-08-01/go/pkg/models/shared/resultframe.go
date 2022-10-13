package shared

type ResultFrame struct {
	Records           []Record           `json:"records"`
	ResultSetMetadata *ResultSetMetadata `json:"resultSetMetadata"`
}
