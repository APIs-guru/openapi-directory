package shared

type TargetingValueDayPartTargetingDayPart struct {
	DayOfWeek   *string `json:"dayOfWeek,omitempty"`
	EndHour     *int32  `json:"endHour,omitempty"`
	EndMinute   *int32  `json:"endMinute,omitempty"`
	StartHour   *int32  `json:"startHour,omitempty"`
	StartMinute *int32  `json:"startMinute,omitempty"`
}
