package shared

import (
	"time"
)

type DescribeRobotResponse struct {
	Architecture       *ArchitectureEnum `json:"architecture,omitempty"`
	Arn                *string           `json:"arn,omitempty"`
	CreatedAt          *time.Time        `json:"createdAt,omitempty"`
	FleetArn           *string           `json:"fleetArn,omitempty"`
	GreengrassGroupID  *string           `json:"greengrassGroupId,omitempty"`
	LastDeploymentJob  *string           `json:"lastDeploymentJob,omitempty"`
	LastDeploymentTime *time.Time        `json:"lastDeploymentTime,omitempty"`
	Name               *string           `json:"name,omitempty"`
	Status             *RobotStatusEnum  `json:"status,omitempty"`
	Tags               map[string]string `json:"tags,omitempty"`
}
