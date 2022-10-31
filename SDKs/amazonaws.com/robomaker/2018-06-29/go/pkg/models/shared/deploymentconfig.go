package shared

type DeploymentConfig struct {
	ConcurrentDeploymentPercentage  *int64    `json:"concurrentDeploymentPercentage,omitempty"`
	DownloadConditionFile           *S3Object `json:"downloadConditionFile,omitempty"`
	FailureThresholdPercentage      *int64    `json:"failureThresholdPercentage,omitempty"`
	RobotDeploymentTimeoutInSeconds *int64    `json:"robotDeploymentTimeoutInSeconds,omitempty"`
}
