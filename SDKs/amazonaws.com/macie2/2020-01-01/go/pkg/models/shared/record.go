package shared

// Record
// Specifies the location of an occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file.
type Record struct {
	JSONPath    *string `json:"jsonPath,omitempty"`
	RecordIndex *int64  `json:"recordIndex,omitempty"`
}
