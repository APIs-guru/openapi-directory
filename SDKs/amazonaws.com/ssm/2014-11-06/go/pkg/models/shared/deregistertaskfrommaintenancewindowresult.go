package shared

type DeregisterTaskFromMaintenanceWindowResult struct {
	WindowID     *string `json:"WindowId,omitempty"`
	WindowTaskID *string `json:"WindowTaskId,omitempty"`
}
