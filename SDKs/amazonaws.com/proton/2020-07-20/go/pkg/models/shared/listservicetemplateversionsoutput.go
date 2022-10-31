package shared



type ListServiceTemplateVersionsOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    TemplateVersions []ServiceTemplateVersionSummary `json:"templateVersions"`
    
}

