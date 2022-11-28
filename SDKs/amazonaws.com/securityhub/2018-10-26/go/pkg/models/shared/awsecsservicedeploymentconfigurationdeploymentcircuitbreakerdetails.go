package shared

// AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails
// Determines whether a service deployment fails if a service cannot reach a steady state.
type AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails struct {
	Enable   *bool `json:"Enable,omitempty"`
	Rollback *bool `json:"Rollback,omitempty"`
}
