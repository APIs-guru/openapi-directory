package shared



type BlueGreenUpdatePolicy struct {
    MaximumExecutionTimeoutInSeconds *int64 `json:"MaximumExecutionTimeoutInSeconds,omitempty"`
    TerminationWaitInSeconds *int64 `json:"TerminationWaitInSeconds,omitempty"`
    TrafficRoutingConfiguration TrafficRoutingConfig `json:"TrafficRoutingConfiguration"`
    
}

