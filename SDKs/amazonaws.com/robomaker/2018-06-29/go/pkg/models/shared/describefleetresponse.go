package shared

import (
	"time"
)

type DescribeFleetResponse struct {
	Arn                  *string               `json:"arn"`
	CreatedAt            *time.Time            `json:"createdAt"`
	LastDeploymentJob    *string               `json:"lastDeploymentJob"`
	LastDeploymentStatus *DeploymentStatusEnum `json:"lastDeploymentStatus"`
	LastDeploymentTime   *time.Time            `json:"lastDeploymentTime"`
	Name                 *string               `json:"name"`
	Robots               []Robot               `json:"robots"`
	Tags                 map[string]string     `json:"tags"`
}
