package shared



type UpdateEnvironmentInput struct {
    DeploymentType DeploymentUpdateTypeEnum `json:"deploymentType"`
    Description *string `json:"description,omitempty"`
    EnvironmentAccountConnectionID *string `json:"environmentAccountConnectionId,omitempty"`
    Name string `json:"name"`
    ProtonServiceRoleArn *string `json:"protonServiceRoleArn,omitempty"`
    Spec *string `json:"spec,omitempty"`
    TemplateMajorVersion *string `json:"templateMajorVersion,omitempty"`
    TemplateMinorVersion *string `json:"templateMinorVersion,omitempty"`
    
}

