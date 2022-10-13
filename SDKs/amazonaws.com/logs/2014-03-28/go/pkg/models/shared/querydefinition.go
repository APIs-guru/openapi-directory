package shared

type QueryDefinition struct {
	LastModified      *int64   `json:"lastModified"`
	LogGroupNames     []string `json:"logGroupNames"`
	Name              *string  `json:"name"`
	QueryDefinitionID *string  `json:"queryDefinitionId"`
	QueryString       *string  `json:"queryString"`
}
