package shared

type BlueGreenUpdatePolicy struct {
	MaximumExecutionTimeoutInSeconds *int64               `json:"MaximumExecutionTimeoutInSeconds"`
	TerminationWaitInSeconds         *int64               `json:"TerminationWaitInSeconds"`
	TrafficRoutingConfiguration      TrafficRoutingConfig `json:"TrafficRoutingConfiguration"`
}
