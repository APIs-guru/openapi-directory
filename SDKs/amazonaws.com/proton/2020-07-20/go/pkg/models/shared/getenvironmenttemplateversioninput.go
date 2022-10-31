package shared

type GetEnvironmentTemplateVersionInput struct {
	MajorVersion string `json:"majorVersion"`
	MinorVersion string `json:"minorVersion"`
	TemplateName string `json:"templateName"`
}
