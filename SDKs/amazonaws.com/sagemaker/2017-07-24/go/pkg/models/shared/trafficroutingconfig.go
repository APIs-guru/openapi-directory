package shared

// TrafficRoutingConfig
// Currently, the <code>TrafficRoutingConfig</code> API is not supported.
type TrafficRoutingConfig struct {
	CanarySize            *CapacitySize                `json:"CanarySize,omitempty"`
	Type                  TrafficRoutingConfigTypeEnum `json:"Type"`
	WaitIntervalInSeconds int64                        `json:"WaitIntervalInSeconds"`
}
