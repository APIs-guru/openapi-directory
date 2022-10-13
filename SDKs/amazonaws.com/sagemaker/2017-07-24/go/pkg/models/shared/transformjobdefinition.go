package shared

type TransformJobDefinition struct {
	BatchStrategy           *BatchStrategyEnum `json:"BatchStrategy"`
	Environment             map[string]string  `json:"Environment"`
	MaxConcurrentTransforms *int64             `json:"MaxConcurrentTransforms"`
	MaxPayloadInMb          *int64             `json:"MaxPayloadInMB"`
	TransformInput          TransformInput     `json:"TransformInput"`
	TransformOutput         TransformOutput    `json:"TransformOutput"`
	TransformResources      TransformResources `json:"TransformResources"`
}
