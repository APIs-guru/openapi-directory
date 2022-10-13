package shared

type ListEnvironmentTemplateVersionsOutput struct {
	NextToken        *string                             `json:"nextToken"`
	TemplateVersions []EnvironmentTemplateVersionSummary `json:"templateVersions"`
}
