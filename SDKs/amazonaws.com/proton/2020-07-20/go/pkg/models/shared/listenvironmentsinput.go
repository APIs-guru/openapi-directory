package shared

type ListEnvironmentsInput struct {
	EnvironmentTemplates []EnvironmentTemplateFilter `json:"environmentTemplates"`
	MaxResults           *int64                      `json:"maxResults"`
	NextToken            *string                     `json:"nextToken"`
}
