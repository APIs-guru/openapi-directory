package shared

import (
	"time"
)

type DescribeDeploymentJobResponse struct {
	Arn                          *string                       `json:"arn,omitempty"`
	CreatedAt                    *time.Time                    `json:"createdAt,omitempty"`
	DeploymentApplicationConfigs []DeploymentApplicationConfig `json:"deploymentApplicationConfigs,omitempty"`
	DeploymentConfig             *DeploymentConfig             `json:"deploymentConfig,omitempty"`
	FailureCode                  *DeploymentJobErrorCodeEnum   `json:"failureCode,omitempty"`
	FailureReason                *string                       `json:"failureReason,omitempty"`
	Fleet                        *string                       `json:"fleet,omitempty"`
	RobotDeploymentSummary       []RobotDeployment             `json:"robotDeploymentSummary,omitempty"`
	Status                       *DeploymentStatusEnum         `json:"status,omitempty"`
	Tags                         map[string]string             `json:"tags,omitempty"`
}
