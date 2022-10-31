package shared



type CreateTransformJobRequest struct {
    BatchStrategy *BatchStrategyEnum `json:"BatchStrategy,omitempty"`
    DataProcessing *DataProcessing `json:"DataProcessing,omitempty"`
    Environment map[string]string `json:"Environment,omitempty"`
    ExperimentConfig *ExperimentConfig `json:"ExperimentConfig,omitempty"`
    MaxConcurrentTransforms *int64 `json:"MaxConcurrentTransforms,omitempty"`
    MaxPayloadInMb *int64 `json:"MaxPayloadInMB,omitempty"`
    ModelClientConfig *ModelClientConfig `json:"ModelClientConfig,omitempty"`
    ModelName string `json:"ModelName"`
    Tags []Tag `json:"Tags,omitempty"`
    TransformInput TransformInput `json:"TransformInput"`
    TransformJobName string `json:"TransformJobName"`
    TransformOutput TransformOutput `json:"TransformOutput"`
    TransformResources TransformResources `json:"TransformResources"`
    
}

