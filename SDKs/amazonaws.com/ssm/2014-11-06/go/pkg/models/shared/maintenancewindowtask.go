package shared

// MaintenanceWindowTask
// Information about a task defined for a maintenance window.
type MaintenanceWindowTask struct {
	Description    *string                                                  `json:"Description,omitempty"`
	LoggingInfo    *LoggingInfo                                             `json:"LoggingInfo,omitempty"`
	MaxConcurrency *string                                                  `json:"MaxConcurrency,omitempty"`
	MaxErrors      *string                                                  `json:"MaxErrors,omitempty"`
	Name           *string                                                  `json:"Name,omitempty"`
	Priority       *int64                                                   `json:"Priority,omitempty"`
	ServiceRoleArn *string                                                  `json:"ServiceRoleArn,omitempty"`
	Targets        []Target                                                 `json:"Targets,omitempty"`
	TaskArn        *string                                                  `json:"TaskArn,omitempty"`
	TaskParameters map[string]MaintenanceWindowTaskParameterValueExpression `json:"TaskParameters,omitempty"`
	Type           *MaintenanceWindowTaskTypeEnum                           `json:"Type,omitempty"`
	WindowID       *string                                                  `json:"WindowId,omitempty"`
	WindowTaskID   *string                                                  `json:"WindowTaskId,omitempty"`
}
