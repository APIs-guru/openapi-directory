package shared



type FinishedWorldsSummary struct {
    FailureSummary *FailureSummary `json:"failureSummary,omitempty"`
    FinishedCount *int64 `json:"finishedCount,omitempty"`
    SucceededWorlds []string `json:"succeededWorlds,omitempty"`
    
}

