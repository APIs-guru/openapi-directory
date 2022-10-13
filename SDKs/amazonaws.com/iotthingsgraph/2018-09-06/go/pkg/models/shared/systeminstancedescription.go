package shared

type SystemInstanceDescription struct {
	Definition                   *DefinitionDocument    `json:"definition"`
	FlowActionsRoleArn           *string                `json:"flowActionsRoleArn"`
	MetricsConfiguration         *MetricsConfiguration  `json:"metricsConfiguration"`
	S3BucketName                 *string                `json:"s3BucketName"`
	Summary                      *SystemInstanceSummary `json:"summary"`
	ValidatedDependencyRevisions []DependencyRevision   `json:"validatedDependencyRevisions"`
	ValidatedNamespaceVersion    *int64                 `json:"validatedNamespaceVersion"`
}
