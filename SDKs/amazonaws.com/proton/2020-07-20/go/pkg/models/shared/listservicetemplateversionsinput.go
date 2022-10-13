package shared

type ListServiceTemplateVersionsInput struct {
	MajorVersion *string `json:"majorVersion"`
	MaxResults   *int64  `json:"maxResults"`
	NextToken    *string `json:"nextToken"`
	TemplateName string  `json:"templateName"`
}
