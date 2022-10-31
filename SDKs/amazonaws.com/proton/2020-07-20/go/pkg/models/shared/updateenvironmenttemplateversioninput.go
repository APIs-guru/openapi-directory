package shared

type UpdateEnvironmentTemplateVersionInput struct {
	Description  *string                    `json:"description,omitempty"`
	MajorVersion string                     `json:"majorVersion"`
	MinorVersion string                     `json:"minorVersion"`
	Status       *TemplateVersionStatusEnum `json:"status,omitempty"`
	TemplateName string                     `json:"templateName"`
}
