package shared

type UpdateServicePipelineInput struct {
	DeploymentType       DeploymentUpdateTypeEnum `json:"deploymentType"`
	ServiceName          string                   `json:"serviceName"`
	Spec                 string                   `json:"spec"`
	TemplateMajorVersion *string                  `json:"templateMajorVersion"`
	TemplateMinorVersion *string                  `json:"templateMinorVersion"`
}
