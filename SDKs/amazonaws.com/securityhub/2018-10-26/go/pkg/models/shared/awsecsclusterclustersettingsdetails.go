package shared

// AwsEcsClusterClusterSettingsDetails
// Indicates whether to enable CloudWatch Container Insights for the ECS cluster.
type AwsEcsClusterClusterSettingsDetails struct {
	Name  *string `json:"Name,omitempty"`
	Value *string `json:"Value,omitempty"`
}
