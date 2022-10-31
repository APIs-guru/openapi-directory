package shared

type ListEnvironmentsInput struct {
	EnvironmentTemplates []EnvironmentTemplateFilter `json:"environmentTemplates,omitempty"`
	MaxResults           *int64                      `json:"maxResults,omitempty"`
	NextToken            *string                     `json:"nextToken,omitempty"`
}
