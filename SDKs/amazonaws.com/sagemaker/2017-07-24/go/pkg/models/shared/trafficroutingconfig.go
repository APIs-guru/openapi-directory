package shared



type TrafficRoutingConfig struct {
    CanarySize *CapacitySize `json:"CanarySize,omitempty"`
    Type TrafficRoutingConfigTypeEnum `json:"Type"`
    WaitIntervalInSeconds int64 `json:"WaitIntervalInSeconds"`
    
}

