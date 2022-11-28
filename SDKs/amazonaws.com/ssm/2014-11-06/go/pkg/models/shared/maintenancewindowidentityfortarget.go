package shared

// MaintenanceWindowIdentityForTarget
// The maintenance window to which the specified target belongs.
type MaintenanceWindowIdentityForTarget struct {
	Name     *string `json:"Name,omitempty"`
	WindowID *string `json:"WindowId,omitempty"`
}
