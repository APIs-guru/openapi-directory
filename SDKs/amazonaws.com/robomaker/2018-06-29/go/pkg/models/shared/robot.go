package shared

import (
	"time"
)

type Robot struct {
	Architecture       *ArchitectureEnum `json:"architecture,omitempty"`
	Arn                *string           `json:"arn,omitempty"`
	CreatedAt          *time.Time        `json:"createdAt,omitempty"`
	FleetArn           *string           `json:"fleetArn,omitempty"`
	GreenGrassGroupID  *string           `json:"greenGrassGroupId,omitempty"`
	LastDeploymentJob  *string           `json:"lastDeploymentJob,omitempty"`
	LastDeploymentTime *time.Time        `json:"lastDeploymentTime,omitempty"`
	Name               *string           `json:"name,omitempty"`
	Status             *RobotStatusEnum  `json:"status,omitempty"`
}
