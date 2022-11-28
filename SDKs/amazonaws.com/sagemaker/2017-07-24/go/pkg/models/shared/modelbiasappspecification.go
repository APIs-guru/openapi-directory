package shared

// ModelBiasAppSpecification
// Docker container image configuration object for the model bias job.
type ModelBiasAppSpecification struct {
	ConfigURI   string            `json:"ConfigUri"`
	Environment map[string]string `json:"Environment,omitempty"`
	ImageURI    string            `json:"ImageUri"`
}
