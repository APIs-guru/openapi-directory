package shared

// AutoMlContainerDefinition
// A list of container definitions that describe the different containers that make up an AutoML candidate. For more information, see .
type AutoMlContainerDefinition struct {
	Environment  map[string]string `json:"Environment,omitempty"`
	Image        string            `json:"Image"`
	ModelDataURL string            `json:"ModelDataUrl"`
}
