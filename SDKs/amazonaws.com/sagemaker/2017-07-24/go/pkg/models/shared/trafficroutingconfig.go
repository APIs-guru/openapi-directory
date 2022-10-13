package shared

type TrafficRoutingConfig struct {
	CanarySize            *CapacitySize                `json:"CanarySize"`
	Type                  TrafficRoutingConfigTypeEnum `json:"Type"`
	WaitIntervalInSeconds int64                        `json:"WaitIntervalInSeconds"`
}
