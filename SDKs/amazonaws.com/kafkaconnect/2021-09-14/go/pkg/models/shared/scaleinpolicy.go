package shared

// ScaleInPolicy
// The scale-in policy for the connector.
type ScaleInPolicy struct {
	CPUUtilizationPercentage int64 `json:"cpuUtilizationPercentage"`
}
