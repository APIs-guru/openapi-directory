package shared

// HealthCheck
// Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment.
type HealthCheck struct {
	CheckInterval      *string `json:"checkInterval,omitempty"`
	DisableHealthCheck *bool   `json:"disableHealthCheck,omitempty"`
	HealthyThreshold   *int64  `json:"healthyThreshold,omitempty"`
	Host               *string `json:"host,omitempty"`
	RestartThreshold   *int64  `json:"restartThreshold,omitempty"`
	Timeout            *string `json:"timeout,omitempty"`
	UnhealthyThreshold *int64  `json:"unhealthyThreshold,omitempty"`
}
