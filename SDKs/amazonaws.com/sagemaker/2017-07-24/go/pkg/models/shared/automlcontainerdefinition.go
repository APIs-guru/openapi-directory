package shared

type AutoMlContainerDefinition struct {
	Environment  map[string]string `json:"Environment,omitempty"`
	Image        string            `json:"Image"`
	ModelDataURL string            `json:"ModelDataUrl"`
}
