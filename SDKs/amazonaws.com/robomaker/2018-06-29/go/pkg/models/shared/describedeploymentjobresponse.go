package shared

import (
	"time"
)

type DescribeDeploymentJobResponse struct {
	Arn                          *string                       `json:"arn"`
	CreatedAt                    *time.Time                    `json:"createdAt"`
	DeploymentApplicationConfigs []DeploymentApplicationConfig `json:"deploymentApplicationConfigs"`
	DeploymentConfig             *DeploymentConfig             `json:"deploymentConfig"`
	FailureCode                  *DeploymentJobErrorCodeEnum   `json:"failureCode"`
	FailureReason                *string                       `json:"failureReason"`
	Fleet                        *string                       `json:"fleet"`
	RobotDeploymentSummary       []RobotDeployment             `json:"robotDeploymentSummary"`
	Status                       *DeploymentStatusEnum         `json:"status"`
	Tags                         map[string]string             `json:"tags"`
}
