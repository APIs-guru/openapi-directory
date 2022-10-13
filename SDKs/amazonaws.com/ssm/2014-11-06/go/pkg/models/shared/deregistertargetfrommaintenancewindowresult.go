package shared

type DeregisterTargetFromMaintenanceWindowResult struct {
	WindowID       *string `json:"WindowId"`
	WindowTargetID *string `json:"WindowTargetId"`
}
