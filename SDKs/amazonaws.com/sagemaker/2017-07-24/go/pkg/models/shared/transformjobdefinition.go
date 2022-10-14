package shared

type TransformJobDefinition struct {
	BatchStrategy           *BatchStrategyEnum `json:"BatchStrategy,omitempty"`
	Environment             map[string]string  `json:"Environment,omitempty"`
	MaxConcurrentTransforms *int64             `json:"MaxConcurrentTransforms,omitempty"`
	MaxPayloadInMb          *int64             `json:"MaxPayloadInMB,omitempty"`
	TransformInput          TransformInput     `json:"TransformInput"`
	TransformOutput         TransformOutput    `json:"TransformOutput"`
	TransformResources      TransformResources `json:"TransformResources"`
}
