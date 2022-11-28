package shared

import (
	"time"
)

// Environment
// The environment detail data. An AWS Proton environment is a set resources shared across an AWS Proton service.
type Environment struct {
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
	Spec                           *string              `json:"spec,omitempty"`
	TemplateMajorVersion           string               `json:"templateMajorVersion"`
	TemplateMinorVersion           string               `json:"templateMinorVersion"`
	TemplateName                   string               `json:"templateName"`
}
