package shared

type DeploymentConfig struct {
	ConcurrentDeploymentPercentage  *int64    `json:"concurrentDeploymentPercentage"`
	DownloadConditionFile           *S3Object `json:"downloadConditionFile"`
	FailureThresholdPercentage      *int64    `json:"failureThresholdPercentage"`
	RobotDeploymentTimeoutInSeconds *int64    `json:"robotDeploymentTimeoutInSeconds"`
}
