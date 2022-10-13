package shared

type TargetingValueDayPartTargeting struct {
	DayParts     []TargetingValueDayPartTargetingDayPart `json:"dayParts"`
	TimeZoneType *string                                 `json:"timeZoneType"`
}
