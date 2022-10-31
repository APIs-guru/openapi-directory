package shared



type DescribeMaintenanceWindowExecutionTaskInvocationsRequest struct {
    Filters []MaintenanceWindowFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    TaskID string `json:"TaskId"`
    WindowExecutionID string `json:"WindowExecutionId"`
    
}

