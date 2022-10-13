package shared

type CreateModelPackageInput struct {
	CertifyForMarketplace        *bool                                `json:"CertifyForMarketplace"`
	ClientToken                  *string                              `json:"ClientToken"`
	InferenceSpecification       *InferenceSpecification              `json:"InferenceSpecification"`
	MetadataProperties           *MetadataProperties                  `json:"MetadataProperties"`
	ModelApprovalStatus          *ModelApprovalStatusEnum             `json:"ModelApprovalStatus"`
	ModelMetrics                 *ModelMetrics                        `json:"ModelMetrics"`
	ModelPackageDescription      *string                              `json:"ModelPackageDescription"`
	ModelPackageGroupName        *string                              `json:"ModelPackageGroupName"`
	ModelPackageName             *string                              `json:"ModelPackageName"`
	SourceAlgorithmSpecification *SourceAlgorithmSpecification        `json:"SourceAlgorithmSpecification"`
	Tags                         []Tag                                `json:"Tags"`
	ValidationSpecification      *ModelPackageValidationSpecification `json:"ValidationSpecification"`
}
