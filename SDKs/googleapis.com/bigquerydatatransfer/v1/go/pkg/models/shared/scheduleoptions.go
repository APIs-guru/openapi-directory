package shared

type ScheduleOptions struct {
	DisableAutoScheduling *bool   `json:"disableAutoScheduling"`
	EndTime               *string `json:"endTime"`
	StartTime             *string `json:"startTime"`
}
