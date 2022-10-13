package shared

import (
	"time"
)

type RobotDeployment struct {
	Arn                  *string                     `json:"arn"`
	DeploymentFinishTime *time.Time                  `json:"deploymentFinishTime"`
	DeploymentStartTime  *time.Time                  `json:"deploymentStartTime"`
	FailureCode          *DeploymentJobErrorCodeEnum `json:"failureCode"`
	FailureReason        *string                     `json:"failureReason"`
	ProgressDetail       *ProgressDetail             `json:"progressDetail"`
	Status               *RobotStatusEnum            `json:"status"`
}
