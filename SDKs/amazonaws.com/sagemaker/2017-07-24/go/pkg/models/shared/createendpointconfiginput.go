package shared

type CreateEndpointConfigInput struct {
	AsyncInferenceConfig *AsyncInferenceConfig `json:"AsyncInferenceConfig,omitempty"`
	DataCaptureConfig    *DataCaptureConfig    `json:"DataCaptureConfig,omitempty"`
	EndpointConfigName   string                `json:"EndpointConfigName"`
	KmsKeyID             *string               `json:"KmsKeyId,omitempty"`
	ProductionVariants   []ProductionVariant   `json:"ProductionVariants"`
	Tags                 []Tag                 `json:"Tags,omitempty"`
}
