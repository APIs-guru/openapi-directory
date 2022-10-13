package shared

type AutoMlContainerDefinition struct {
	Environment  map[string]string `json:"Environment"`
	Image        string            `json:"Image"`
	ModelDataURL string            `json:"ModelDataUrl"`
}
