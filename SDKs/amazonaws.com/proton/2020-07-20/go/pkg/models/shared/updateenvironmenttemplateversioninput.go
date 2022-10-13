package shared

type UpdateEnvironmentTemplateVersionInput struct {
	Description  *string                    `json:"description"`
	MajorVersion string                     `json:"majorVersion"`
	MinorVersion string                     `json:"minorVersion"`
	Status       *TemplateVersionStatusEnum `json:"status"`
	TemplateName string                     `json:"templateName"`
}
