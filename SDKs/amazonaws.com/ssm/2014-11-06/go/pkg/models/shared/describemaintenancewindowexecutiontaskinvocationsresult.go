package shared

type DescribeMaintenanceWindowExecutionTaskInvocationsResult struct {
	NextToken                               *string                                            `json:"NextToken"`
	WindowExecutionTaskInvocationIdentities []MaintenanceWindowExecutionTaskInvocationIdentity `json:"WindowExecutionTaskInvocationIdentities"`
}
