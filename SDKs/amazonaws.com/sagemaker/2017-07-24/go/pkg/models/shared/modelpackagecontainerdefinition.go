package shared

// ModelPackageContainerDefinition
// Describes the Docker container for the model package.
type ModelPackageContainerDefinition struct {
	ContainerHostname *string           `json:"ContainerHostname,omitempty"`
	Environment       map[string]string `json:"Environment,omitempty"`
	Image             string            `json:"Image"`
	ImageDigest       *string           `json:"ImageDigest,omitempty"`
	ModelDataURL      *string           `json:"ModelDataUrl,omitempty"`
	ProductID         *string           `json:"ProductId,omitempty"`
}
