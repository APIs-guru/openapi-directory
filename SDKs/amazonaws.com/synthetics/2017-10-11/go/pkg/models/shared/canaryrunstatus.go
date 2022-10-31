package shared



type CanaryRunStatus struct {
    State *CanaryRunStateEnum `json:"State,omitempty"`
    StateReason *string `json:"StateReason,omitempty"`
    StateReasonCode *CanaryRunStateReasonCodeEnum `json:"StateReasonCode,omitempty"`
    
}

