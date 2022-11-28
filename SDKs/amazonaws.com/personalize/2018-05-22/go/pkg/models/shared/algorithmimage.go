package shared

// AlgorithmImage
// Describes an algorithm image.
type AlgorithmImage struct {
	DockerURI string  `json:"dockerURI"`
	Name      *string `json:"name,omitempty"`
}
