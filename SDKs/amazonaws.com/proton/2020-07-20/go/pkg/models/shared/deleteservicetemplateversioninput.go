package shared

type DeleteServiceTemplateVersionInput struct {
	MajorVersion string `json:"majorVersion"`
	MinorVersion string `json:"minorVersion"`
	TemplateName string `json:"templateName"`
}
