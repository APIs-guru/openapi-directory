package shared



type CreateServiceTemplateVersionInput struct {
    ClientToken *string `json:"clientToken,omitempty"`
    CompatibleEnvironmentTemplates []CompatibleEnvironmentTemplateInput `json:"compatibleEnvironmentTemplates"`
    Description *string `json:"description,omitempty"`
    MajorVersion *string `json:"majorVersion,omitempty"`
    Source TemplateVersionSourceInput `json:"source"`
    Tags []Tag `json:"tags,omitempty"`
    TemplateName string `json:"templateName"`
    
}

