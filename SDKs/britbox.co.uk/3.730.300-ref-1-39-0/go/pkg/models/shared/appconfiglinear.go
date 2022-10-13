package shared

type AppConfigLinear struct {
	ScheduleCacheMaxAgeMinutes *int32 `json:"scheduleCacheMaxAgeMinutes"`
	ViewingWindowDaysAfter     *int32 `json:"viewingWindowDaysAfter"`
	ViewingWindowDaysBefore    *int32 `json:"viewingWindowDaysBefore"`
}
