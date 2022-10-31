package shared



type OverageDetails struct {
    Count *int32 `json:"count,omitempty"`
    Limit *int32 `json:"limit,omitempty"`
    OveragesReached *bool `json:"overages_reached,omitempty"`
    Remaining *int32 `json:"remaining,omitempty"`
    
}

