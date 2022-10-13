package shared

type TargetingValueDayPartTargetingDayPart struct {
	DayOfWeek   *string `json:"dayOfWeek"`
	EndHour     *int32  `json:"endHour"`
	EndMinute   *int32  `json:"endMinute"`
	StartHour   *int32  `json:"startHour"`
	StartMinute *int32  `json:"startMinute"`
}
