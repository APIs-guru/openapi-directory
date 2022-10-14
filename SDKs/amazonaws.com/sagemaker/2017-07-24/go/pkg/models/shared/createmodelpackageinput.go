package shared

type CreateModelPackageInput struct {
	CertifyForMarketplace        *bool                                `json:"CertifyForMarketplace,omitempty"`
	ClientToken                  *string                              `json:"ClientToken,omitempty"`
	InferenceSpecification       *InferenceSpecification              `json:"InferenceSpecification,omitempty"`
	MetadataProperties           *MetadataProperties                  `json:"MetadataProperties,omitempty"`
	ModelApprovalStatus          *ModelApprovalStatusEnum             `json:"ModelApprovalStatus,omitempty"`
	ModelMetrics                 *ModelMetrics                        `json:"ModelMetrics,omitempty"`
	ModelPackageDescription      *string                              `json:"ModelPackageDescription,omitempty"`
	ModelPackageGroupName        *string                              `json:"ModelPackageGroupName,omitempty"`
	ModelPackageName             *string                              `json:"ModelPackageName,omitempty"`
	SourceAlgorithmSpecification *SourceAlgorithmSpecification        `json:"SourceAlgorithmSpecification,omitempty"`
	Tags                         []Tag                                `json:"Tags,omitempty"`
	ValidationSpecification      *ModelPackageValidationSpecification `json:"ValidationSpecification,omitempty"`
}
