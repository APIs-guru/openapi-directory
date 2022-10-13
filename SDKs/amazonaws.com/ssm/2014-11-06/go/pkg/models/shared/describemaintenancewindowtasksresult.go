package shared

type DescribeMaintenanceWindowTasksResult struct {
	NextToken *string                 `json:"NextToken"`
	Tasks     []MaintenanceWindowTask `json:"Tasks"`
}
