package shared

type ModelBiasAppSpecification struct {
	ConfigURI   string            `json:"ConfigUri"`
	Environment map[string]string `json:"Environment"`
	ImageURI    string            `json:"ImageUri"`
}
