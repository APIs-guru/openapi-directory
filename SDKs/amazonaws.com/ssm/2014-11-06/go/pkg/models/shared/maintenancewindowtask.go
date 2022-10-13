package shared

type MaintenanceWindowTask struct {
	Description    *string                                                  `json:"Description"`
	LoggingInfo    *LoggingInfo                                             `json:"LoggingInfo"`
	MaxConcurrency *string                                                  `json:"MaxConcurrency"`
	MaxErrors      *string                                                  `json:"MaxErrors"`
	Name           *string                                                  `json:"Name"`
	Priority       *int64                                                   `json:"Priority"`
	ServiceRoleArn *string                                                  `json:"ServiceRoleArn"`
	Targets        []Target                                                 `json:"Targets"`
	TaskArn        *string                                                  `json:"TaskArn"`
	TaskParameters map[string]MaintenanceWindowTaskParameterValueExpression `json:"TaskParameters"`
	Type           *MaintenanceWindowTaskTypeEnum                           `json:"Type"`
	WindowID       *string                                                  `json:"WindowId"`
	WindowTaskID   *string                                                  `json:"WindowTaskId"`
}
