package shared

import (
	"time"
)

type SyncDeploymentJobResponse struct {
	Arn                          *string                       `json:"arn,omitempty"`
	CreatedAt                    *time.Time                    `json:"createdAt,omitempty"`
	DeploymentApplicationConfigs []DeploymentApplicationConfig `json:"deploymentApplicationConfigs,omitempty"`
	DeploymentConfig             *DeploymentConfig             `json:"deploymentConfig,omitempty"`
	FailureCode                  *DeploymentJobErrorCodeEnum   `json:"failureCode,omitempty"`
	FailureReason                *string                       `json:"failureReason,omitempty"`
	Fleet                        *string                       `json:"fleet,omitempty"`
	Status                       *DeploymentStatusEnum         `json:"status,omitempty"`
}
