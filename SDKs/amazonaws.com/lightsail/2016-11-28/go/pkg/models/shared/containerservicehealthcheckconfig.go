package shared

type ContainerServiceHealthCheckConfig struct {
	HealthyThreshold   *int64  `json:"healthyThreshold"`
	IntervalSeconds    *int64  `json:"intervalSeconds"`
	Path               *string `json:"path"`
	SuccessCodes       *string `json:"successCodes"`
	TimeoutSeconds     *int64  `json:"timeoutSeconds"`
	UnhealthyThreshold *int64  `json:"unhealthyThreshold"`
}
