package shared

// RelativeDateRange
// A relative date range, specified by an offset and a duration. The supported range of dates begins 30 days before today and ends today, for example, the limits for these values are: offset_days >= 0 duration_days >= 1 offset_days + duration_days <= 30
type RelativeDateRange struct {
	DurationDays *int32 `json:"durationDays,omitempty"`
	OffsetDays   *int32 `json:"offsetDays,omitempty"`
}
