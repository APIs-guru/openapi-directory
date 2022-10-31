package shared



type RegisterTaskWithMaintenanceWindowRequest struct {
    ClientToken *string `json:"ClientToken,omitempty"`
    Description *string `json:"Description,omitempty"`
    LoggingInfo *LoggingInfo `json:"LoggingInfo,omitempty"`
    MaxConcurrency *string `json:"MaxConcurrency,omitempty"`
    MaxErrors *string `json:"MaxErrors,omitempty"`
    Name *string `json:"Name,omitempty"`
    Priority *int64 `json:"Priority,omitempty"`
    ServiceRoleArn *string `json:"ServiceRoleArn,omitempty"`
    Targets []Target `json:"Targets,omitempty"`
    TaskArn string `json:"TaskArn"`
    TaskInvocationParameters *MaintenanceWindowTaskInvocationParameters `json:"TaskInvocationParameters,omitempty"`
    TaskParameters map[string]MaintenanceWindowTaskParameterValueExpression `json:"TaskParameters,omitempty"`
    TaskType MaintenanceWindowTaskTypeEnum `json:"TaskType"`
    WindowID string `json:"WindowId"`
    
}

