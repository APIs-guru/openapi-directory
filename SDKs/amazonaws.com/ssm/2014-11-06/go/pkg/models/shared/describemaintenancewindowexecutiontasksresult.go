package shared



type DescribeMaintenanceWindowExecutionTasksResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    WindowExecutionTaskIdentities []MaintenanceWindowExecutionTaskIdentity `json:"WindowExecutionTaskIdentities,omitempty"`
    
}

