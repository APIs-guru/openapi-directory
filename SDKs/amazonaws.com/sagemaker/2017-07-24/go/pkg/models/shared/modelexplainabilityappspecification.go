package shared

type ModelExplainabilityAppSpecification struct {
	ConfigURI   string            `json:"ConfigUri"`
	Environment map[string]string `json:"Environment,omitempty"`
	ImageURI    string            `json:"ImageUri"`
}
