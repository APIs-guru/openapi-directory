package shared

type DescribeMaintenanceWindowExecutionTasksRequest struct {
	Filters           []MaintenanceWindowFilter `json:"Filters,omitempty"`
	MaxResults        *int64                    `json:"MaxResults,omitempty"`
	NextToken         *string                   `json:"NextToken,omitempty"`
	WindowExecutionID string                    `json:"WindowExecutionId"`
}
