package shared

import (
	"time"
)

// ModelPackageGroupSummary
// Summary information about a model group.
type ModelPackageGroupSummary struct {
	CreationTime                 time.Time                   `json:"CreationTime"`
	ModelPackageGroupArn         string                      `json:"ModelPackageGroupArn"`
	ModelPackageGroupDescription *string                     `json:"ModelPackageGroupDescription,omitempty"`
	ModelPackageGroupName        string                      `json:"ModelPackageGroupName"`
	ModelPackageGroupStatus      ModelPackageGroupStatusEnum `json:"ModelPackageGroupStatus"`
}
