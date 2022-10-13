package shared

type ScheduleWorkPatternEvenWeeks struct {
	HoursFriday    *float64 `json:"hours_friday"`
	HoursMonday    *float64 `json:"hours_monday"`
	HoursSaturday  *float64 `json:"hours_saturday"`
	HoursSunday    *float64 `json:"hours_sunday"`
	HoursThursday  *float64 `json:"hours_thursday"`
	HoursTuesday   *float64 `json:"hours_tuesday"`
	HoursWednesday *float64 `json:"hours_wednesday"`
}

type ScheduleWorkPatternOddWeeks struct {
	HoursFriday    *float64 `json:"hours_friday"`
	HoursMonday    *float64 `json:"hours_monday"`
	HoursSaturday  *float64 `json:"hours_saturday"`
	HoursSunday    *float64 `json:"hours_sunday"`
	HoursThursday  *float64 `json:"hours_thursday"`
	HoursTuesday   *float64 `json:"hours_tuesday"`
	HoursWednesday *float64 `json:"hours_wednesday"`
}

type ScheduleWorkPattern struct {
	EvenWeeks *ScheduleWorkPatternEvenWeeks `json:"even_weeks"`
	OddWeeks  *ScheduleWorkPatternOddWeeks  `json:"odd_weeks"`
}

type Schedule struct {
	EndDate     string              `json:"end_date"`
	ID          string              `json:"id"`
	StartDate   string              `json:"start_date"`
	WorkPattern ScheduleWorkPattern `json:"work_pattern"`
}
