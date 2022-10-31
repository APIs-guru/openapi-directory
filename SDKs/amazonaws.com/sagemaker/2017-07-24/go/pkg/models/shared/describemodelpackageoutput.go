package shared

import (
"time")

type DescribeModelPackageOutput struct {
    ApprovalDescription *string `json:"ApprovalDescription,omitempty"`
    CertifyForMarketplace *bool `json:"CertifyForMarketplace,omitempty"`
    CreatedBy *UserContext `json:"CreatedBy,omitempty"`
    CreationTime time.Time `json:"CreationTime"`
    InferenceSpecification *InferenceSpecification `json:"InferenceSpecification,omitempty"`
    LastModifiedBy *UserContext `json:"LastModifiedBy,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    MetadataProperties *MetadataProperties `json:"MetadataProperties,omitempty"`
    ModelApprovalStatus *ModelApprovalStatusEnum `json:"ModelApprovalStatus,omitempty"`
    ModelMetrics *ModelMetrics `json:"ModelMetrics,omitempty"`
    ModelPackageArn string `json:"ModelPackageArn"`
    ModelPackageDescription *string `json:"ModelPackageDescription,omitempty"`
    ModelPackageGroupName *string `json:"ModelPackageGroupName,omitempty"`
    ModelPackageName string `json:"ModelPackageName"`
    ModelPackageStatus ModelPackageStatusEnum `json:"ModelPackageStatus"`
    ModelPackageStatusDetails ModelPackageStatusDetails `json:"ModelPackageStatusDetails"`
    ModelPackageVersion *int64 `json:"ModelPackageVersion,omitempty"`
    SourceAlgorithmSpecification *SourceAlgorithmSpecification `json:"SourceAlgorithmSpecification,omitempty"`
    ValidationSpecification *ModelPackageValidationSpecification `json:"ValidationSpecification,omitempty"`
    
}

