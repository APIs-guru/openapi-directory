package shared

// LivenessCheck
// Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
type LivenessCheck struct {
	CheckInterval    *string `json:"checkInterval,omitempty"`
	FailureThreshold *int64  `json:"failureThreshold,omitempty"`
	Host             *string `json:"host,omitempty"`
	InitialDelay     *string `json:"initialDelay,omitempty"`
	Path             *string `json:"path,omitempty"`
	SuccessThreshold *int64  `json:"successThreshold,omitempty"`
	Timeout          *string `json:"timeout,omitempty"`
}
