package shared



type FailureSummary struct {
    Failures []WorldFailure `json:"failures,omitempty"`
    TotalFailureCount *int64 `json:"totalFailureCount,omitempty"`
    
}

