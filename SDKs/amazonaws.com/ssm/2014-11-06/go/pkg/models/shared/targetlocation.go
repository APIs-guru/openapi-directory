package shared



type TargetLocation struct {
    Accounts []string `json:"Accounts,omitempty"`
    ExecutionRoleName *string `json:"ExecutionRoleName,omitempty"`
    Regions []string `json:"Regions,omitempty"`
    TargetLocationMaxConcurrency *string `json:"TargetLocationMaxConcurrency,omitempty"`
    TargetLocationMaxErrors *string `json:"TargetLocationMaxErrors,omitempty"`
    
}

