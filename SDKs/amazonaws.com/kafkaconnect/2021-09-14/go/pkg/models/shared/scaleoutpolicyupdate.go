package shared

// ScaleOutPolicyUpdate
// An update to the connector's scale-out policy.
type ScaleOutPolicyUpdate struct {
	CPUUtilizationPercentage int64 `json:"cpuUtilizationPercentage"`
}
