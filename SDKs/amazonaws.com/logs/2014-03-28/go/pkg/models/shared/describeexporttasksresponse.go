package shared

type DescribeExportTasksResponse struct {
	ExportTasks []ExportTask `json:"exportTasks"`
	NextToken   *string      `json:"nextToken"`
}
