package shared

type ListEnvironmentTemplatesOutput struct {
	NextToken *string                      `json:"nextToken,omitempty"`
	Templates []EnvironmentTemplateSummary `json:"templates"`
}
