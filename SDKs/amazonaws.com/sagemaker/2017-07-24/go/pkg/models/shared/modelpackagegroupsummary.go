package shared

import (
	"time"
)

type ModelPackageGroupSummary struct {
	CreationTime                 time.Time                   `json:"CreationTime"`
	ModelPackageGroupArn         string                      `json:"ModelPackageGroupArn"`
	ModelPackageGroupDescription *string                     `json:"ModelPackageGroupDescription,omitempty"`
	ModelPackageGroupName        string                      `json:"ModelPackageGroupName"`
	ModelPackageGroupStatus      ModelPackageGroupStatusEnum `json:"ModelPackageGroupStatus"`
}
