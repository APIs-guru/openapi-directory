package shared

import (
	"time"
)

// RobotDeployment
// Information about a robot deployment.
type RobotDeployment struct {
	Arn                  *string                     `json:"arn,omitempty"`
	DeploymentFinishTime *time.Time                  `json:"deploymentFinishTime,omitempty"`
	DeploymentStartTime  *time.Time                  `json:"deploymentStartTime,omitempty"`
	FailureCode          *DeploymentJobErrorCodeEnum `json:"failureCode,omitempty"`
	FailureReason        *string                     `json:"failureReason,omitempty"`
	ProgressDetail       *ProgressDetail             `json:"progressDetail,omitempty"`
	Status               *RobotStatusEnum            `json:"status,omitempty"`
}
