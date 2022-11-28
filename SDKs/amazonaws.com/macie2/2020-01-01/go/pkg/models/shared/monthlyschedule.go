package shared

// MonthlySchedule
// Specifies a monthly recurrence pattern for running a classification job.
type MonthlySchedule struct {
	DayOfMonth *int64 `json:"dayOfMonth,omitempty"`
}
