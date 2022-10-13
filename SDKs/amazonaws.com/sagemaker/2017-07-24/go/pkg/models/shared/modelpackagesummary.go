package shared

import (
	"time"
)

type ModelPackageSummary struct {
	CreationTime            time.Time                `json:"CreationTime"`
	ModelApprovalStatus     *ModelApprovalStatusEnum `json:"ModelApprovalStatus"`
	ModelPackageArn         string                   `json:"ModelPackageArn"`
	ModelPackageDescription *string                  `json:"ModelPackageDescription"`
	ModelPackageGroupName   *string                  `json:"ModelPackageGroupName"`
	ModelPackageName        string                   `json:"ModelPackageName"`
	ModelPackageStatus      ModelPackageStatusEnum   `json:"ModelPackageStatus"`
	ModelPackageVersion     *int64                   `json:"ModelPackageVersion"`
}
