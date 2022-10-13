package shared

type ListEnvironmentTemplatesOutput struct {
	NextToken *string                      `json:"nextToken"`
	Templates []EnvironmentTemplateSummary `json:"templates"`
}
