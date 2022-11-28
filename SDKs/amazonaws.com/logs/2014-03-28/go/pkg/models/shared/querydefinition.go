package shared

// QueryDefinition
// This structure contains details about a saved CloudWatch Logs Insights query definition.
type QueryDefinition struct {
	LastModified      *int64   `json:"lastModified,omitempty"`
	LogGroupNames     []string `json:"logGroupNames,omitempty"`
	Name              *string  `json:"name,omitempty"`
	QueryDefinitionID *string  `json:"queryDefinitionId,omitempty"`
	QueryString       *string  `json:"queryString,omitempty"`
}
