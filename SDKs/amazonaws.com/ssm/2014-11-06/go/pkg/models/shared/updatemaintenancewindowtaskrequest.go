package shared

type UpdateMaintenanceWindowTaskRequest struct {
	Description              *string                                                  `json:"Description"`
	LoggingInfo              *LoggingInfo                                             `json:"LoggingInfo"`
	MaxConcurrency           *string                                                  `json:"MaxConcurrency"`
	MaxErrors                *string                                                  `json:"MaxErrors"`
	Name                     *string                                                  `json:"Name"`
	Priority                 *int64                                                   `json:"Priority"`
	Replace                  *bool                                                    `json:"Replace"`
	ServiceRoleArn           *string                                                  `json:"ServiceRoleArn"`
	Targets                  []Target                                                 `json:"Targets"`
	TaskArn                  *string                                                  `json:"TaskArn"`
	TaskInvocationParameters *MaintenanceWindowTaskInvocationParameters               `json:"TaskInvocationParameters"`
	TaskParameters           map[string]MaintenanceWindowTaskParameterValueExpression `json:"TaskParameters"`
	WindowID                 string                                                   `json:"WindowId"`
	WindowTaskID             string                                                   `json:"WindowTaskId"`
}
