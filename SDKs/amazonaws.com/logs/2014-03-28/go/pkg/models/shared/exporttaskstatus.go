package shared

type ExportTaskStatus struct {
	Code    *ExportTaskStatusCodeEnum `json:"code"`
	Message *string                   `json:"message"`
}
