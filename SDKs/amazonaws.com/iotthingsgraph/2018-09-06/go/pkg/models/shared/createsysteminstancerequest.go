package shared

type CreateSystemInstanceRequest struct {
	Definition           DefinitionDocument    `json:"definition"`
	FlowActionsRoleArn   *string               `json:"flowActionsRoleArn,omitempty"`
	GreengrassGroupName  *string               `json:"greengrassGroupName,omitempty"`
	MetricsConfiguration *MetricsConfiguration `json:"metricsConfiguration,omitempty"`
	S3BucketName         *string               `json:"s3BucketName,omitempty"`
	Tags                 []Tag                 `json:"tags,omitempty"`
	Target               DeploymentTargetEnum  `json:"target"`
}
