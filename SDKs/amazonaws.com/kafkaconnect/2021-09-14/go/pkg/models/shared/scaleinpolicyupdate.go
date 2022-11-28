package shared

// ScaleInPolicyUpdate
// An update to the connector's scale-in policy.
type ScaleInPolicyUpdate struct {
	CPUUtilizationPercentage int64 `json:"cpuUtilizationPercentage"`
}
