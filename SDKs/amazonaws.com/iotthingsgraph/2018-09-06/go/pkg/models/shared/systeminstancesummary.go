package shared

import (
	"time"
)

type SystemInstanceSummary struct {
	Arn                      *string                             `json:"arn"`
	CreatedAt                *time.Time                          `json:"createdAt"`
	GreengrassGroupID        *string                             `json:"greengrassGroupId"`
	GreengrassGroupName      *string                             `json:"greengrassGroupName"`
	GreengrassGroupVersionID *string                             `json:"greengrassGroupVersionId"`
	ID                       *string                             `json:"id"`
	Status                   *SystemInstanceDeploymentStatusEnum `json:"status"`
	Target                   *DeploymentTargetEnum               `json:"target"`
	UpdatedAt                *time.Time                          `json:"updatedAt"`
}
