package shared

type CreateSystemInstanceRequest struct {
	Definition           DefinitionDocument    `json:"definition"`
	FlowActionsRoleArn   *string               `json:"flowActionsRoleArn"`
	GreengrassGroupName  *string               `json:"greengrassGroupName"`
	MetricsConfiguration *MetricsConfiguration `json:"metricsConfiguration"`
	S3BucketName         *string               `json:"s3BucketName"`
	Tags                 []Tag                 `json:"tags"`
	Target               DeploymentTargetEnum  `json:"target"`
}
