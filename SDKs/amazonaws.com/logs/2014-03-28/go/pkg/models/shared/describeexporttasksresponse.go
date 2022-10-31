package shared



type DescribeExportTasksResponse struct {
    ExportTasks []ExportTask `json:"exportTasks,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

