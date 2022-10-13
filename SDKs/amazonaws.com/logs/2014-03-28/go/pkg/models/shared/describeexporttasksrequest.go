package shared

type DescribeExportTasksRequest struct {
	Limit      *int64                    `json:"limit"`
	NextToken  *string                   `json:"nextToken"`
	StatusCode *ExportTaskStatusCodeEnum `json:"statusCode"`
	TaskID     *string                   `json:"taskId"`
}
