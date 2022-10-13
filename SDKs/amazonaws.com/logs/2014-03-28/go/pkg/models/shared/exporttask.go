package shared

type ExportTask struct {
	Destination       *string                  `json:"destination"`
	DestinationPrefix *string                  `json:"destinationPrefix"`
	ExecutionInfo     *ExportTaskExecutionInfo `json:"executionInfo"`
	From              *int64                   `json:"from"`
	LogGroupName      *string                  `json:"logGroupName"`
	Status            *ExportTaskStatus        `json:"status"`
	TaskID            *string                  `json:"taskId"`
	TaskName          *string                  `json:"taskName"`
	To                *int64                   `json:"to"`
}
