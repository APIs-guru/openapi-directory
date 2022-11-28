package shared

// ExportTaskExecutionInfo
// Represents the status of an export task.
type ExportTaskExecutionInfo struct {
	CompletionTime *int64 `json:"completionTime,omitempty"`
	CreationTime   *int64 `json:"creationTime,omitempty"`
}
