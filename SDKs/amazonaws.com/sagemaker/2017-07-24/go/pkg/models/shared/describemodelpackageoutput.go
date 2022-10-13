package shared

import (
	"time"
)

type DescribeModelPackageOutput struct {
	ApprovalDescription          *string                              `json:"ApprovalDescription"`
	CertifyForMarketplace        *bool                                `json:"CertifyForMarketplace"`
	CreatedBy                    *UserContext                         `json:"CreatedBy"`
	CreationTime                 time.Time                            `json:"CreationTime"`
	InferenceSpecification       *InferenceSpecification              `json:"InferenceSpecification"`
	LastModifiedBy               *UserContext                         `json:"LastModifiedBy"`
	LastModifiedTime             *time.Time                           `json:"LastModifiedTime"`
	MetadataProperties           *MetadataProperties                  `json:"MetadataProperties"`
	ModelApprovalStatus          *ModelApprovalStatusEnum             `json:"ModelApprovalStatus"`
	ModelMetrics                 *ModelMetrics                        `json:"ModelMetrics"`
	ModelPackageArn              string                               `json:"ModelPackageArn"`
	ModelPackageDescription      *string                              `json:"ModelPackageDescription"`
	ModelPackageGroupName        *string                              `json:"ModelPackageGroupName"`
	ModelPackageName             string                               `json:"ModelPackageName"`
	ModelPackageStatus           ModelPackageStatusEnum               `json:"ModelPackageStatus"`
	ModelPackageStatusDetails    ModelPackageStatusDetails            `json:"ModelPackageStatusDetails"`
	ModelPackageVersion          *int64                               `json:"ModelPackageVersion"`
	SourceAlgorithmSpecification *SourceAlgorithmSpecification        `json:"SourceAlgorithmSpecification"`
	ValidationSpecification      *ModelPackageValidationSpecification `json:"ValidationSpecification"`
}
