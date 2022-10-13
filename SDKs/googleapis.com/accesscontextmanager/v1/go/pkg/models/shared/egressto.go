package shared

type EgressTo struct {
	ExternalResources []string       `json:"externalResources"`
	Operations        []APIOperation `json:"operations"`
	Resources         []string       `json:"resources"`
}
