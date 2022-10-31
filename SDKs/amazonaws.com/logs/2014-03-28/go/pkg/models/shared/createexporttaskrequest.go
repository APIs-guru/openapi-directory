package shared

type CreateExportTaskRequest struct {
	Destination         string  `json:"destination"`
	DestinationPrefix   *string `json:"destinationPrefix,omitempty"`
	From                int64   `json:"from"`
	LogGroupName        string  `json:"logGroupName"`
	LogStreamNamePrefix *string `json:"logStreamNamePrefix,omitempty"`
	TaskName            *string `json:"taskName,omitempty"`
	To                  int64   `json:"to"`
}
