package shared

import (
"time")

type DescribeFleetResponse struct {
    Arn *string `json:"arn,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    LastDeploymentJob *string `json:"lastDeploymentJob,omitempty"`
    LastDeploymentStatus *DeploymentStatusEnum `json:"lastDeploymentStatus,omitempty"`
    LastDeploymentTime *time.Time `json:"lastDeploymentTime,omitempty"`
    Name *string `json:"name,omitempty"`
    Robots []Robot `json:"robots,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

