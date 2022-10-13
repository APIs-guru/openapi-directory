package shared

type DeregisterTargetFromMaintenanceWindowRequest struct {
	Safe           *bool  `json:"Safe"`
	WindowID       string `json:"WindowId"`
	WindowTargetID string `json:"WindowTargetId"`
}
