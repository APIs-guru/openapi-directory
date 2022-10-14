package shared

type UpdateMaintenanceWindowTaskRequest struct {
	Description              *string                                                  `json:"Description,omitempty"`
	LoggingInfo              *LoggingInfo                                             `json:"LoggingInfo,omitempty"`
	MaxConcurrency           *string                                                  `json:"MaxConcurrency,omitempty"`
	MaxErrors                *string                                                  `json:"MaxErrors,omitempty"`
	Name                     *string                                                  `json:"Name,omitempty"`
	Priority                 *int64                                                   `json:"Priority,omitempty"`
	Replace                  *bool                                                    `json:"Replace,omitempty"`
	ServiceRoleArn           *string                                                  `json:"ServiceRoleArn,omitempty"`
	Targets                  []Target                                                 `json:"Targets,omitempty"`
	TaskArn                  *string                                                  `json:"TaskArn,omitempty"`
	TaskInvocationParameters *MaintenanceWindowTaskInvocationParameters               `json:"TaskInvocationParameters,omitempty"`
	TaskParameters           map[string]MaintenanceWindowTaskParameterValueExpression `json:"TaskParameters,omitempty"`
	WindowID                 string                                                   `json:"WindowId"`
	WindowTaskID             string                                                   `json:"WindowTaskId"`
}
