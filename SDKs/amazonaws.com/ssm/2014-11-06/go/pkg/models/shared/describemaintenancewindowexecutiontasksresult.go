package shared

type DescribeMaintenanceWindowExecutionTasksResult struct {
	NextToken                     *string                                  `json:"NextToken"`
	WindowExecutionTaskIdentities []MaintenanceWindowExecutionTaskIdentity `json:"WindowExecutionTaskIdentities"`
}
