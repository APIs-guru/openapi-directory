package shared

type ListServiceTemplatesOutput struct {
	NextToken *string                  `json:"nextToken"`
	Templates []ServiceTemplateSummary `json:"templates"`
}
