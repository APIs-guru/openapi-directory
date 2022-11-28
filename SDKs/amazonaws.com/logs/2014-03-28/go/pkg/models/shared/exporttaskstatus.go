package shared

// ExportTaskStatus
// Represents the status of an export task.
type ExportTaskStatus struct {
	Code    *ExportTaskStatusCodeEnum `json:"code,omitempty"`
	Message *string                   `json:"message,omitempty"`
}
