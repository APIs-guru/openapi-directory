package shared

type CreateServiceTemplateVersionInput struct {
	ClientToken                    *string                              `json:"clientToken"`
	CompatibleEnvironmentTemplates []CompatibleEnvironmentTemplateInput `json:"compatibleEnvironmentTemplates"`
	Description                    *string                              `json:"description"`
	MajorVersion                   *string                              `json:"majorVersion"`
	Source                         TemplateVersionSourceInput           `json:"source"`
	Tags                           []Tag                                `json:"tags"`
	TemplateName                   string                               `json:"templateName"`
}
