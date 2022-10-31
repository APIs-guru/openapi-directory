package shared

import (
	"time"
)

type ModelPackageSummary struct {
	CreationTime            time.Time                `json:"CreationTime"`
	ModelApprovalStatus     *ModelApprovalStatusEnum `json:"ModelApprovalStatus,omitempty"`
	ModelPackageArn         string                   `json:"ModelPackageArn"`
	ModelPackageDescription *string                  `json:"ModelPackageDescription,omitempty"`
	ModelPackageGroupName   *string                  `json:"ModelPackageGroupName,omitempty"`
	ModelPackageName        string                   `json:"ModelPackageName"`
	ModelPackageStatus      ModelPackageStatusEnum   `json:"ModelPackageStatus"`
	ModelPackageVersion     *int64                   `json:"ModelPackageVersion,omitempty"`
}
