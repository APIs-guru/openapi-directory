package shared

type ListServiceTemplateVersionsInput struct {
	MajorVersion *string `json:"majorVersion,omitempty"`
	MaxResults   *int64  `json:"maxResults,omitempty"`
	NextToken    *string `json:"nextToken,omitempty"`
	TemplateName string  `json:"templateName"`
}
