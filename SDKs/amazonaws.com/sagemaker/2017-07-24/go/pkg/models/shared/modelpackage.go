package shared

import (
	"time"
)

type ModelPackage struct {
	ApprovalDescription          *string                              `json:"ApprovalDescription,omitempty"`
	CertifyForMarketplace        *bool                                `json:"CertifyForMarketplace,omitempty"`
	CreatedBy                    *UserContext                         `json:"CreatedBy,omitempty"`
	CreationTime                 *time.Time                           `json:"CreationTime,omitempty"`
	InferenceSpecification       *InferenceSpecification              `json:"InferenceSpecification,omitempty"`
	LastModifiedBy               *UserContext                         `json:"LastModifiedBy,omitempty"`
	LastModifiedTime             *time.Time                           `json:"LastModifiedTime,omitempty"`
	MetadataProperties           *MetadataProperties                  `json:"MetadataProperties,omitempty"`
	ModelApprovalStatus          *ModelApprovalStatusEnum             `json:"ModelApprovalStatus,omitempty"`
	ModelMetrics                 *ModelMetrics                        `json:"ModelMetrics,omitempty"`
	ModelPackageArn              *string                              `json:"ModelPackageArn,omitempty"`
	ModelPackageDescription      *string                              `json:"ModelPackageDescription,omitempty"`
	ModelPackageGroupName        *string                              `json:"ModelPackageGroupName,omitempty"`
	ModelPackageName             *string                              `json:"ModelPackageName,omitempty"`
	ModelPackageStatus           *ModelPackageStatusEnum              `json:"ModelPackageStatus,omitempty"`
	ModelPackageStatusDetails    *ModelPackageStatusDetails           `json:"ModelPackageStatusDetails,omitempty"`
	ModelPackageVersion          *int64                               `json:"ModelPackageVersion,omitempty"`
	SourceAlgorithmSpecification *SourceAlgorithmSpecification        `json:"SourceAlgorithmSpecification,omitempty"`
	Tags                         []Tag                                `json:"Tags,omitempty"`
	ValidationSpecification      *ModelPackageValidationSpecification `json:"ValidationSpecification,omitempty"`
}
