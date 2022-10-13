package shared

import (
	"time"
)

type Robot struct {
	Architecture       *ArchitectureEnum `json:"architecture"`
	Arn                *string           `json:"arn"`
	CreatedAt          *time.Time        `json:"createdAt"`
	FleetArn           *string           `json:"fleetArn"`
	GreenGrassGroupID  *string           `json:"greenGrassGroupId"`
	LastDeploymentJob  *string           `json:"lastDeploymentJob"`
	LastDeploymentTime *time.Time        `json:"lastDeploymentTime"`
	Name               *string           `json:"name"`
	Status             *RobotStatusEnum  `json:"status"`
}
