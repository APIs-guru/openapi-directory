package shared

// ScaleInPolicyDescription
// The description of the scale-in policy for the connector.
type ScaleInPolicyDescription struct {
	CPUUtilizationPercentage *int64 `json:"cpuUtilizationPercentage,omitempty"`
}
