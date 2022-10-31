package shared

type ListServiceTemplatesOutput struct {
	NextToken *string                  `json:"nextToken,omitempty"`
	Templates []ServiceTemplateSummary `json:"templates"`
}
