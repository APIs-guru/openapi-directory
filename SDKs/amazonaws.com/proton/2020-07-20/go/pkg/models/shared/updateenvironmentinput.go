package shared

type UpdateEnvironmentInput struct {
	DeploymentType                 DeploymentUpdateTypeEnum `json:"deploymentType"`
	Description                    *string                  `json:"description"`
	EnvironmentAccountConnectionID *string                  `json:"environmentAccountConnectionId"`
	Name                           string                   `json:"name"`
	ProtonServiceRoleArn           *string                  `json:"protonServiceRoleArn"`
	Spec                           *string                  `json:"spec"`
	TemplateMajorVersion           *string                  `json:"templateMajorVersion"`
	TemplateMinorVersion           *string                  `json:"templateMinorVersion"`
}
