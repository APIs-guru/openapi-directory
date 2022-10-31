package shared



type ReadinessCheck struct {
    AppStartTimeout *string `json:"appStartTimeout,omitempty"`
    CheckInterval *string `json:"checkInterval,omitempty"`
    FailureThreshold *int64 `json:"failureThreshold,omitempty"`
    Host *string `json:"host,omitempty"`
    Path *string `json:"path,omitempty"`
    SuccessThreshold *int64 `json:"successThreshold,omitempty"`
    Timeout *string `json:"timeout,omitempty"`
    
}

