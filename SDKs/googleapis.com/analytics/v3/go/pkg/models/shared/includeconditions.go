package shared

type IncludeConditions struct {
	DaysToLookBack         *int32  `json:"daysToLookBack"`
	IsSmartList            *bool   `json:"isSmartList"`
	Kind                   *string `json:"kind"`
	MembershipDurationDays *int32  `json:"membershipDurationDays"`
	Segment                *string `json:"segment"`
}
