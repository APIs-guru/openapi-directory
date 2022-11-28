package shared

import (
	"time"
)

// EnvironmentSummary
// A summary of the environment detail data.
type EnvironmentSummary struct {
	Arn                            string               `json:"arn"`
	CreatedAt                      time.Time            `json:"createdAt"`
	DeploymentStatus               DeploymentStatusEnum `json:"deploymentStatus"`
	DeploymentStatusMessage        *string              `json:"deploymentStatusMessage,omitempty"`
	Description                    *string              `json:"description,omitempty"`
	EnvironmentAccountConnectionID *string              `json:"environmentAccountConnectionId,omitempty"`
	EnvironmentAccountID           *string              `json:"environmentAccountId,omitempty"`
	LastDeploymentAttemptedAt      time.Time            `json:"lastDeploymentAttemptedAt"`
	LastDeploymentSucceededAt      time.Time            `json:"lastDeploymentSucceededAt"`
	Name                           string               `json:"name"`
	ProtonServiceRoleArn           *string              `json:"protonServiceRoleArn,omitempty"`
	Provisioning                   *ProvisioningEnum    `json:"provisioning,omitempty"`
	TemplateMajorVersion           string               `json:"templateMajorVersion"`
	TemplateMinorVersion           string               `json:"templateMinorVersion"`
	TemplateName                   string               `json:"templateName"`
}
