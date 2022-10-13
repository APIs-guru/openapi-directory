package shared

type CreateExportTaskRequest struct {
	Destination         string  `json:"destination"`
	DestinationPrefix   *string `json:"destinationPrefix"`
	From                int64   `json:"from"`
	LogGroupName        string  `json:"logGroupName"`
	LogStreamNamePrefix *string `json:"logStreamNamePrefix"`
	TaskName            *string `json:"taskName"`
	To                  int64   `json:"to"`
}
