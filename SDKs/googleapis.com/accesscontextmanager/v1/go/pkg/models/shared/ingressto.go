package shared

type IngressTo struct {
	Operations []APIOperation `json:"operations,omitempty"`
	Resources  []string       `json:"resources,omitempty"`
}
