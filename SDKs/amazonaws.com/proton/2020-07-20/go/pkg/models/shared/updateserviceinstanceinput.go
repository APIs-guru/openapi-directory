package shared

type UpdateServiceInstanceInput struct {
	DeploymentType       DeploymentUpdateTypeEnum `json:"deploymentType"`
	Name                 string                   `json:"name"`
	ServiceName          string                   `json:"serviceName"`
	Spec                 *string                  `json:"spec,omitempty"`
	TemplateMajorVersion *string                  `json:"templateMajorVersion,omitempty"`
	TemplateMinorVersion *string                  `json:"templateMinorVersion,omitempty"`
}
