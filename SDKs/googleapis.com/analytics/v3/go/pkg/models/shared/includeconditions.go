package shared



type IncludeConditions struct {
    DaysToLookBack *int32 `json:"daysToLookBack,omitempty"`
    IsSmartList *bool `json:"isSmartList,omitempty"`
    Kind *string `json:"kind,omitempty"`
    MembershipDurationDays *int32 `json:"membershipDurationDays,omitempty"`
    Segment *string `json:"segment,omitempty"`
    
}

