package shared



type CanaryLastRun struct {
    CanaryName *string `json:"CanaryName,omitempty"`
    LastRun *CanaryRun `json:"LastRun,omitempty"`
    
}

