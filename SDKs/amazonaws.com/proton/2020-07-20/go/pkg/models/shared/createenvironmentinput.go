package shared

type CreateEnvironmentInput struct {
	Description                    *string `json:"description"`
	EnvironmentAccountConnectionID *string `json:"environmentAccountConnectionId"`
	Name                           string  `json:"name"`
	ProtonServiceRoleArn           *string `json:"protonServiceRoleArn"`
	Spec                           string  `json:"spec"`
	Tags                           []Tag   `json:"tags"`
	TemplateMajorVersion           string  `json:"templateMajorVersion"`
	TemplateMinorVersion           *string `json:"templateMinorVersion"`
	TemplateName                   string  `json:"templateName"`
}
