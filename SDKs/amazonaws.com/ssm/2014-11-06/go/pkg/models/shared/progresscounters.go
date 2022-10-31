package shared



type ProgressCounters struct {
    CancelledSteps *int64 `json:"CancelledSteps,omitempty"`
    FailedSteps *int64 `json:"FailedSteps,omitempty"`
    SuccessSteps *int64 `json:"SuccessSteps,omitempty"`
    TimedOutSteps *int64 `json:"TimedOutSteps,omitempty"`
    TotalSteps *int64 `json:"TotalSteps,omitempty"`
    
}

