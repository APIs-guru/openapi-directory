package shared



type ListEnvironmentTemplateVersionsOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    TemplateVersions []EnvironmentTemplateVersionSummary `json:"templateVersions"`
    
}

