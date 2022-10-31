package shared



type DescribeExportTasksRequest struct {
    Limit *int64 `json:"limit,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    StatusCode *ExportTaskStatusCodeEnum `json:"statusCode,omitempty"`
    TaskID *string `json:"taskId,omitempty"`
    
}

