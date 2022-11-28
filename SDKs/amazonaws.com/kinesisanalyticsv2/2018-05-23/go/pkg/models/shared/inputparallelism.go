package shared

// InputParallelism
// For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source.
type InputParallelism struct {
	Count *int64 `json:"Count,omitempty"`
}
