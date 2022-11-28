package shared

// ScheduleOptions
// Options customizing the data transfer schedule.
type ScheduleOptions struct {
	DisableAutoScheduling *bool   `json:"disableAutoScheduling,omitempty"`
	EndTime               *string `json:"endTime,omitempty"`
	StartTime             *string `json:"startTime,omitempty"`
}
