package shared

// WeeklySchedule
// Specifies a weekly recurrence pattern for running a classification job.
type WeeklySchedule struct {
	DayOfWeek *DayOfWeekEnum `json:"dayOfWeek,omitempty"`
}
