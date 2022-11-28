package shared

import (
	"time"
)

// SystemInstanceSummary
// An object that contains summary information about a system instance.
type SystemInstanceSummary struct {
	Arn                      *string                             `json:"arn,omitempty"`
	CreatedAt                *time.Time                          `json:"createdAt,omitempty"`
	GreengrassGroupID        *string                             `json:"greengrassGroupId,omitempty"`
	GreengrassGroupName      *string                             `json:"greengrassGroupName,omitempty"`
	GreengrassGroupVersionID *string                             `json:"greengrassGroupVersionId,omitempty"`
	ID                       *string                             `json:"id,omitempty"`
	Status                   *SystemInstanceDeploymentStatusEnum `json:"status,omitempty"`
	Target                   *DeploymentTargetEnum               `json:"target,omitempty"`
	UpdatedAt                *time.Time                          `json:"updatedAt,omitempty"`
}
