package shared

type HealthCheckConfig struct {
	FailureThreshold *int64              `json:"FailureThreshold"`
	ResourcePath     *string             `json:"ResourcePath"`
	Type             HealthCheckTypeEnum `json:"Type"`
}
