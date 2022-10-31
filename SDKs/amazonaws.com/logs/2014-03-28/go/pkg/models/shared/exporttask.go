package shared



type ExportTask struct {
    Destination *string `json:"destination,omitempty"`
    DestinationPrefix *string `json:"destinationPrefix,omitempty"`
    ExecutionInfo *ExportTaskExecutionInfo `json:"executionInfo,omitempty"`
    From *int64 `json:"from,omitempty"`
    LogGroupName *string `json:"logGroupName,omitempty"`
    Status *ExportTaskStatus `json:"status,omitempty"`
    TaskID *string `json:"taskId,omitempty"`
    TaskName *string `json:"taskName,omitempty"`
    To *int64 `json:"to,omitempty"`
    
}

