package shared

type DescribeMaintenanceWindowExecutionsResult struct {
	NextToken        *string                      `json:"NextToken"`
	WindowExecutions []MaintenanceWindowExecution `json:"WindowExecutions"`
}
