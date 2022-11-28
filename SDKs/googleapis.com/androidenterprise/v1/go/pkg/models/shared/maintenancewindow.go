package shared

// MaintenanceWindow
// Maintenance window for managed Google Play Accounts. This allows Play store to update the apps on the foreground in the designated window.
type MaintenanceWindow struct {
	DurationMs               *string `json:"durationMs,omitempty"`
	StartTimeAfterMidnightMs *string `json:"startTimeAfterMidnightMs,omitempty"`
}
