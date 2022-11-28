package shared

// SourceSchema
// For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
type SourceSchema struct {
	RecordColumns  []RecordColumn `json:"RecordColumns"`
	RecordEncoding *string        `json:"RecordEncoding,omitempty"`
	RecordFormat   RecordFormat   `json:"RecordFormat"`
}
