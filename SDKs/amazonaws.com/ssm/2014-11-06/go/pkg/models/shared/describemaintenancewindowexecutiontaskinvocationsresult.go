package shared



type DescribeMaintenanceWindowExecutionTaskInvocationsResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    WindowExecutionTaskInvocationIdentities []MaintenanceWindowExecutionTaskInvocationIdentity `json:"WindowExecutionTaskInvocationIdentities,omitempty"`
    
}

