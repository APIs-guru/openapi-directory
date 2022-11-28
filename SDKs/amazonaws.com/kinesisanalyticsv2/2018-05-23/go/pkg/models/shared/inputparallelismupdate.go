package shared

// InputParallelismUpdate
// For a SQL-based Kinesis Data Analytics application, provides updates to the parallelism count.
type InputParallelismUpdate struct {
	CountUpdate int64 `json:"CountUpdate"`
}
