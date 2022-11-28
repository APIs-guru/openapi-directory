package shared

// ReadinessCheck
// Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation.
type ReadinessCheck struct {
	AppStartTimeout  *string `json:"appStartTimeout,omitempty"`
	CheckInterval    *string `json:"checkInterval,omitempty"`
	FailureThreshold *int64  `json:"failureThreshold,omitempty"`
	Host             *string `json:"host,omitempty"`
	Path             *string `json:"path,omitempty"`
	SuccessThreshold *int64  `json:"successThreshold,omitempty"`
	Timeout          *string `json:"timeout,omitempty"`
}
