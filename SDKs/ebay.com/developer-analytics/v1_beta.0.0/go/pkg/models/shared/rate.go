package shared



type Rate struct {
    Limit *int32 `json:"limit,omitempty"`
    Remaining *int32 `json:"remaining,omitempty"`
    Reset *string `json:"reset,omitempty"`
    TimeWindow *int32 `json:"timeWindow,omitempty"`
    
}

