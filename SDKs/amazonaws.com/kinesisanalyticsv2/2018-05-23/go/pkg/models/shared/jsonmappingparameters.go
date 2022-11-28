package shared

// JSONMappingParameters
// For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.
type JSONMappingParameters struct {
	RecordRowPath string `json:"RecordRowPath"`
}
