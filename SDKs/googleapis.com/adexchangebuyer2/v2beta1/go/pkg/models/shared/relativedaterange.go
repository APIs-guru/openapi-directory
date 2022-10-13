package shared

type RelativeDateRange struct {
	DurationDays *int32 `json:"durationDays"`
	OffsetDays   *int32 `json:"offsetDays"`
}
