package shared

type DescribeMaintenanceWindowExecutionTaskInvocationsRequest struct {
	Filters           []MaintenanceWindowFilter `json:"Filters"`
	MaxResults        *int64                    `json:"MaxResults"`
	NextToken         *string                   `json:"NextToken"`
	TaskID            string                    `json:"TaskId"`
	WindowExecutionID string                    `json:"WindowExecutionId"`
}
