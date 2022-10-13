package shared

type CreateTransformJobRequest struct {
	BatchStrategy           *BatchStrategyEnum `json:"BatchStrategy"`
	DataProcessing          *DataProcessing    `json:"DataProcessing"`
	Environment             map[string]string  `json:"Environment"`
	ExperimentConfig        *ExperimentConfig  `json:"ExperimentConfig"`
	MaxConcurrentTransforms *int64             `json:"MaxConcurrentTransforms"`
	MaxPayloadInMb          *int64             `json:"MaxPayloadInMB"`
	ModelClientConfig       *ModelClientConfig `json:"ModelClientConfig"`
	ModelName               string             `json:"ModelName"`
	Tags                    []Tag              `json:"Tags"`
	TransformInput          TransformInput     `json:"TransformInput"`
	TransformJobName        string             `json:"TransformJobName"`
	TransformOutput         TransformOutput    `json:"TransformOutput"`
	TransformResources      TransformResources `json:"TransformResources"`
}
