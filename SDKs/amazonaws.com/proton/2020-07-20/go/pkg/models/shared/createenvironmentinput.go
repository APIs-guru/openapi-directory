package shared



type CreateEnvironmentInput struct {
    Description *string `json:"description,omitempty"`
    EnvironmentAccountConnectionID *string `json:"environmentAccountConnectionId,omitempty"`
    Name string `json:"name"`
    ProtonServiceRoleArn *string `json:"protonServiceRoleArn,omitempty"`
    Spec string `json:"spec"`
    Tags []Tag `json:"tags,omitempty"`
    TemplateMajorVersion string `json:"templateMajorVersion"`
    TemplateMinorVersion *string `json:"templateMinorVersion,omitempty"`
    TemplateName string `json:"templateName"`
    
}

