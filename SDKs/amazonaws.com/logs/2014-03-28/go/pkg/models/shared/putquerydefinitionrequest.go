package shared

type PutQueryDefinitionRequest struct {
	LogGroupNames     []string `json:"logGroupNames,omitempty"`
	Name              string   `json:"name"`
	QueryDefinitionID *string  `json:"queryDefinitionId,omitempty"`
	QueryString       string   `json:"queryString"`
}
