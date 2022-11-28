package shared

// ScaleOutPolicyDescription
// The description of the scale-out policy for the connector.
type ScaleOutPolicyDescription struct {
	CPUUtilizationPercentage *int64 `json:"cpuUtilizationPercentage,omitempty"`
}
