package shared

type DescribeMaintenanceWindowTasksResult struct {
	NextToken *string                 `json:"NextToken,omitempty"`
	Tasks     []MaintenanceWindowTask `json:"Tasks,omitempty"`
}
