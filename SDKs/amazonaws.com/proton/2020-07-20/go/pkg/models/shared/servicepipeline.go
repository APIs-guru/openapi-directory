package shared

import (
	"time"
)

type ServicePipeline struct {
	Arn                       string               `json:"arn"`
	CreatedAt                 time.Time            `json:"createdAt"`
	DeploymentStatus          DeploymentStatusEnum `json:"deploymentStatus"`
	DeploymentStatusMessage   *string              `json:"deploymentStatusMessage"`
	LastDeploymentAttemptedAt time.Time            `json:"lastDeploymentAttemptedAt"`
	LastDeploymentSucceededAt time.Time            `json:"lastDeploymentSucceededAt"`
	Spec                      *string              `json:"spec"`
	TemplateMajorVersion      string               `json:"templateMajorVersion"`
	TemplateMinorVersion      string               `json:"templateMinorVersion"`
	TemplateName              string               `json:"templateName"`
}
