package shared



type CanaryStatus struct {
    State *CanaryStateEnum `json:"State,omitempty"`
    StateReason *string `json:"StateReason,omitempty"`
    StateReasonCode *CanaryStateReasonCodeEnum `json:"StateReasonCode,omitempty"`
    
}

