package shared

// BlueGreenUpdatePolicy
// Currently, the <code>BlueGreenUpdatePolicy</code> API is not supported.
type BlueGreenUpdatePolicy struct {
	MaximumExecutionTimeoutInSeconds *int64               `json:"MaximumExecutionTimeoutInSeconds,omitempty"`
	TerminationWaitInSeconds         *int64               `json:"TerminationWaitInSeconds,omitempty"`
	TrafficRoutingConfiguration      TrafficRoutingConfig `json:"TrafficRoutingConfiguration"`
}
