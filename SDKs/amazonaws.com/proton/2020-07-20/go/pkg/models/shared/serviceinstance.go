package shared

import (
	"time"
)

type ServiceInstance struct {
	Arn                       string               `json:"arn"`
	CreatedAt                 time.Time            `json:"createdAt"`
	DeploymentStatus          DeploymentStatusEnum `json:"deploymentStatus"`
	DeploymentStatusMessage   *string              `json:"deploymentStatusMessage"`
	EnvironmentName           string               `json:"environmentName"`
	LastDeploymentAttemptedAt time.Time            `json:"lastDeploymentAttemptedAt"`
	LastDeploymentSucceededAt time.Time            `json:"lastDeploymentSucceededAt"`
	Name                      string               `json:"name"`
	ServiceName               string               `json:"serviceName"`
	Spec                      *string              `json:"spec"`
	TemplateMajorVersion      string               `json:"templateMajorVersion"`
	TemplateMinorVersion      string               `json:"templateMinorVersion"`
	TemplateName              string               `json:"templateName"`
}
