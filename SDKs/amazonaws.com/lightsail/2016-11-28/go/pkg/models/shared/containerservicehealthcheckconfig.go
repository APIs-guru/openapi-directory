package shared

type ContainerServiceHealthCheckConfig struct {
	HealthyThreshold   *int64  `json:"healthyThreshold,omitempty"`
	IntervalSeconds    *int64  `json:"intervalSeconds,omitempty"`
	Path               *string `json:"path,omitempty"`
	SuccessCodes       *string `json:"successCodes,omitempty"`
	TimeoutSeconds     *int64  `json:"timeoutSeconds,omitempty"`
	UnhealthyThreshold *int64  `json:"unhealthyThreshold,omitempty"`
}
