package shared

type HealthCheckConfig struct {
	FailureThreshold *int64              `json:"FailureThreshold,omitempty"`
	ResourcePath     *string             `json:"ResourcePath,omitempty"`
	Type             HealthCheckTypeEnum `json:"Type"`
}
