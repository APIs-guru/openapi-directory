package shared

type ListServiceTemplateVersionsOutput struct {
	NextToken        *string                         `json:"nextToken"`
	TemplateVersions []ServiceTemplateVersionSummary `json:"templateVersions"`
}
