package shared

import (
	"time"
)

type CreateDeploymentJobResponse struct {
	Arn                          *string                       `json:"arn"`
	CreatedAt                    *time.Time                    `json:"createdAt"`
	DeploymentApplicationConfigs []DeploymentApplicationConfig `json:"deploymentApplicationConfigs"`
	DeploymentConfig             *DeploymentConfig             `json:"deploymentConfig"`
	FailureCode                  *DeploymentJobErrorCodeEnum   `json:"failureCode"`
	FailureReason                *string                       `json:"failureReason"`
	Fleet                        *string                       `json:"fleet"`
	Status                       *DeploymentStatusEnum         `json:"status"`
	Tags                         map[string]string             `json:"tags"`
}
