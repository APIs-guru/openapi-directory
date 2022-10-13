package shared

type CreateEnvironmentTemplateVersionInput struct {
	ClientToken  *string                    `json:"clientToken"`
	Description  *string                    `json:"description"`
	MajorVersion *string                    `json:"majorVersion"`
	Source       TemplateVersionSourceInput `json:"source"`
	Tags         []Tag                      `json:"tags"`
	TemplateName string                     `json:"templateName"`
}
