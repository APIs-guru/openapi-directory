package shared

// EnvironmentTemplateFilter
// A search filter for environment templates.
type EnvironmentTemplateFilter struct {
	MajorVersion string `json:"majorVersion"`
	TemplateName string `json:"templateName"`
}
