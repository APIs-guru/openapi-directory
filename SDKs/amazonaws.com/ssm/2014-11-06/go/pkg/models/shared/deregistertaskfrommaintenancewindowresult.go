package shared

type DeregisterTaskFromMaintenanceWindowResult struct {
	WindowID     *string `json:"WindowId"`
	WindowTaskID *string `json:"WindowTaskId"`
}
