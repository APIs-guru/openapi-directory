package shared

type IngressTo struct {
	Operations []APIOperation `json:"operations"`
	Resources  []string       `json:"resources"`
}
