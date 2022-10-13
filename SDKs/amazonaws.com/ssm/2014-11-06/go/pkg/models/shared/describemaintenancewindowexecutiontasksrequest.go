package shared

type DescribeMaintenanceWindowExecutionTasksRequest struct {
	Filters           []MaintenanceWindowFilter `json:"Filters"`
	MaxResults        *int64                    `json:"MaxResults"`
	NextToken         *string                   `json:"NextToken"`
	WindowExecutionID string                    `json:"WindowExecutionId"`
}
