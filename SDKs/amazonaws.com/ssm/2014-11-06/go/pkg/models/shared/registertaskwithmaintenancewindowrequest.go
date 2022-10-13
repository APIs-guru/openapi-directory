package shared

type RegisterTaskWithMaintenanceWindowRequest struct {
	ClientToken              *string                                                  `json:"ClientToken"`
	Description              *string                                                  `json:"Description"`
	LoggingInfo              *LoggingInfo                                             `json:"LoggingInfo"`
	MaxConcurrency           *string                                                  `json:"MaxConcurrency"`
	MaxErrors                *string                                                  `json:"MaxErrors"`
	Name                     *string                                                  `json:"Name"`
	Priority                 *int64                                                   `json:"Priority"`
	ServiceRoleArn           *string                                                  `json:"ServiceRoleArn"`
	Targets                  []Target                                                 `json:"Targets"`
	TaskArn                  string                                                   `json:"TaskArn"`
	TaskInvocationParameters *MaintenanceWindowTaskInvocationParameters               `json:"TaskInvocationParameters"`
	TaskParameters           map[string]MaintenanceWindowTaskParameterValueExpression `json:"TaskParameters"`
	TaskType                 MaintenanceWindowTaskTypeEnum                            `json:"TaskType"`
	WindowID                 string                                                   `json:"WindowId"`
}
