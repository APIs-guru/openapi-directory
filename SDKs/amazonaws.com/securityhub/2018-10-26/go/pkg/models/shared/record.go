package shared

// Record
// An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file.
type Record struct {
	JSONPath    *string `json:"JsonPath,omitempty"`
	RecordIndex *int64  `json:"RecordIndex,omitempty"`
}
