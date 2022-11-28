package shared

// ScaleOutPolicy
// The scale-out policy for the connector.
type ScaleOutPolicy struct {
	CPUUtilizationPercentage int64 `json:"cpuUtilizationPercentage"`
}
