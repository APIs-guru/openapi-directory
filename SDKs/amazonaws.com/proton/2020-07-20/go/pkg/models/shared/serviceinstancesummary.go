package shared

import (
	"time"
)

// ServiceInstanceSummary
// A summary of the service instance detail data.
type ServiceInstanceSummary struct {
	Arn                       string               `json:"arn"`
	CreatedAt                 time.Time            `json:"createdAt"`
	DeploymentStatus          DeploymentStatusEnum `json:"deploymentStatus"`
	DeploymentStatusMessage   *string              `json:"deploymentStatusMessage,omitempty"`
	EnvironmentName           string               `json:"environmentName"`
	LastDeploymentAttemptedAt time.Time            `json:"lastDeploymentAttemptedAt"`
	LastDeploymentSucceededAt time.Time            `json:"lastDeploymentSucceededAt"`
	Name                      string               `json:"name"`
	ServiceName               string               `json:"serviceName"`
	TemplateMajorVersion      string               `json:"templateMajorVersion"`
	TemplateMinorVersion      string               `json:"templateMinorVersion"`
	TemplateName              string               `json:"templateName"`
}
