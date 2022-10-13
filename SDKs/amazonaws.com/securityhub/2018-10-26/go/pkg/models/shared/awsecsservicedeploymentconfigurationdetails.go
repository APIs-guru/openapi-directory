package shared

type AwsEcsServiceDeploymentConfigurationDetails struct {
	DeploymentCircuitBreaker *AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails `json:"DeploymentCircuitBreaker"`
	MaximumPercent           *int64                                                               `json:"MaximumPercent"`
	MinimumHealthyPercent    *int64                                                               `json:"MinimumHealthyPercent"`
}
