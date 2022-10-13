package shared

import (
	"time"
)

type DescribeRobotResponse struct {
	Architecture       *ArchitectureEnum `json:"architecture"`
	Arn                *string           `json:"arn"`
	CreatedAt          *time.Time        `json:"createdAt"`
	FleetArn           *string           `json:"fleetArn"`
	GreengrassGroupID  *string           `json:"greengrassGroupId"`
	LastDeploymentJob  *string           `json:"lastDeploymentJob"`
	LastDeploymentTime *time.Time        `json:"lastDeploymentTime"`
	Name               *string           `json:"name"`
	Status             *RobotStatusEnum  `json:"status"`
	Tags               map[string]string `json:"tags"`
}
