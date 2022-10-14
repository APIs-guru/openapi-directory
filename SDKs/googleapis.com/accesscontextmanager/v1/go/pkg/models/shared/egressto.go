package shared

type EgressTo struct {
	ExternalResources []string       `json:"externalResources,omitempty"`
	Operations        []APIOperation `json:"operations,omitempty"`
	Resources         []string       `json:"resources,omitempty"`
}
