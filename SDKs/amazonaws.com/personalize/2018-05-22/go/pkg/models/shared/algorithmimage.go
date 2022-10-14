package shared

type AlgorithmImage struct {
	DockerURI string  `json:"dockerURI"`
	Name      *string `json:"name,omitempty"`
}
