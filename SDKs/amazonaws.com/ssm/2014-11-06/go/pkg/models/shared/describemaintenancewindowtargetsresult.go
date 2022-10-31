package shared



type DescribeMaintenanceWindowTargetsResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Targets []MaintenanceWindowTarget `json:"Targets,omitempty"`
    
}

