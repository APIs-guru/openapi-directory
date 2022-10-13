package shared

type PutQueryDefinitionRequest struct {
	LogGroupNames     []string `json:"logGroupNames"`
	Name              string   `json:"name"`
	QueryDefinitionID *string  `json:"queryDefinitionId"`
	QueryString       string   `json:"queryString"`
}
