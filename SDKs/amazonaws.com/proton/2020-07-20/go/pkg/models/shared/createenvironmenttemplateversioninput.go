package shared



type CreateEnvironmentTemplateVersionInput struct {
    ClientToken *string `json:"clientToken,omitempty"`
    Description *string `json:"description,omitempty"`
    MajorVersion *string `json:"majorVersion,omitempty"`
    Source TemplateVersionSourceInput `json:"source"`
    Tags []Tag `json:"tags,omitempty"`
    TemplateName string `json:"templateName"`
    
}

