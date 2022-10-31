package shared



type AwsEcsServiceDeploymentConfigurationDetails struct {
    DeploymentCircuitBreaker *AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails `json:"DeploymentCircuitBreaker,omitempty"`
    MaximumPercent *int64 `json:"MaximumPercent,omitempty"`
    MinimumHealthyPercent *int64 `json:"MinimumHealthyPercent,omitempty"`
    
}

