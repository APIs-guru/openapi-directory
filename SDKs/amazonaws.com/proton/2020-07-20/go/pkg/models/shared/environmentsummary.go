package shared

import (
	"time"
)

type EnvironmentSummary struct {
	Arn                            string               `json:"arn"`
	CreatedAt                      time.Time            `json:"createdAt"`
	DeploymentStatus               DeploymentStatusEnum `json:"deploymentStatus"`
	DeploymentStatusMessage        *string              `json:"deploymentStatusMessage"`
	Description                    *string              `json:"description"`
	EnvironmentAccountConnectionID *string              `json:"environmentAccountConnectionId"`
	EnvironmentAccountID           *string              `json:"environmentAccountId"`
	LastDeploymentAttemptedAt      time.Time            `json:"lastDeploymentAttemptedAt"`
	LastDeploymentSucceededAt      time.Time            `json:"lastDeploymentSucceededAt"`
	Name                           string               `json:"name"`
	ProtonServiceRoleArn           *string              `json:"protonServiceRoleArn"`
	Provisioning                   *ProvisioningEnum    `json:"provisioning"`
	TemplateMajorVersion           string               `json:"templateMajorVersion"`
	TemplateMinorVersion           string               `json:"templateMinorVersion"`
	TemplateName                   string               `json:"templateName"`
}
