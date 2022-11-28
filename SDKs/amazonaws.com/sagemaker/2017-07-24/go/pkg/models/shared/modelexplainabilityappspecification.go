package shared

// ModelExplainabilityAppSpecification
// Docker container image configuration object for the model explainability job.
type ModelExplainabilityAppSpecification struct {
	ConfigURI   string            `json:"ConfigUri"`
	Environment map[string]string `json:"Environment,omitempty"`
	ImageURI    string            `json:"ImageUri"`
}
