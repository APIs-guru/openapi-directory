package shared

type ModelBiasAppSpecification struct {
	ConfigURI   string            `json:"ConfigUri"`
	Environment map[string]string `json:"Environment,omitempty"`
	ImageURI    string            `json:"ImageUri"`
}
