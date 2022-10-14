package shared

type DeregisterTargetFromMaintenanceWindowResult struct {
	WindowID       *string `json:"WindowId,omitempty"`
	WindowTargetID *string `json:"WindowTargetId,omitempty"`
}
