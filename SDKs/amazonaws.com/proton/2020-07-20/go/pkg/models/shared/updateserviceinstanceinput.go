package shared

type UpdateServiceInstanceInput struct {
	DeploymentType       DeploymentUpdateTypeEnum `json:"deploymentType"`
	Name                 string                   `json:"name"`
	ServiceName          string                   `json:"serviceName"`
	Spec                 *string                  `json:"spec"`
	TemplateMajorVersion *string                  `json:"templateMajorVersion"`
	TemplateMinorVersion *string                  `json:"templateMinorVersion"`
}
