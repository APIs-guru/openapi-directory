package shared



type DescribeMaintenanceWindowExecutionsResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    WindowExecutions []MaintenanceWindowExecution `json:"WindowExecutions,omitempty"`
    
}

