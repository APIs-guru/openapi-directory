package shared

type MaintenanceWindow struct {
	DurationMs               *string `json:"durationMs"`
	StartTimeAfterMidnightMs *string `json:"startTimeAfterMidnightMs"`
}
