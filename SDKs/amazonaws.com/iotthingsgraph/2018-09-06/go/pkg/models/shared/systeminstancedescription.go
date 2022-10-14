package shared

type SystemInstanceDescription struct {
	Definition                   *DefinitionDocument    `json:"definition,omitempty"`
	FlowActionsRoleArn           *string                `json:"flowActionsRoleArn,omitempty"`
	MetricsConfiguration         *MetricsConfiguration  `json:"metricsConfiguration,omitempty"`
	S3BucketName                 *string                `json:"s3BucketName,omitempty"`
	Summary                      *SystemInstanceSummary `json:"summary,omitempty"`
	ValidatedDependencyRevisions []DependencyRevision   `json:"validatedDependencyRevisions,omitempty"`
	ValidatedNamespaceVersion    *int64                 `json:"validatedNamespaceVersion,omitempty"`
}
