package shared

type UpdateServiceTemplateVersionInput struct {
	CompatibleEnvironmentTemplates []CompatibleEnvironmentTemplateInput `json:"compatibleEnvironmentTemplates"`
	Description                    *string                              `json:"description"`
	MajorVersion                   string                               `json:"majorVersion"`
	MinorVersion                   string                               `json:"minorVersion"`
	Status                         *TemplateVersionStatusEnum           `json:"status"`
	TemplateName                   string                               `json:"templateName"`
}
