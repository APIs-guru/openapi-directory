package shared

type MaintenanceWindow struct {
	DurationMs               *string `json:"durationMs,omitempty"`
	StartTimeAfterMidnightMs *string `json:"startTimeAfterMidnightMs,omitempty"`
}
