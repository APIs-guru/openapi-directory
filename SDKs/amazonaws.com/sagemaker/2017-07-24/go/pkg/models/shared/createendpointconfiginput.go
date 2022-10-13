package shared

type CreateEndpointConfigInput struct {
	AsyncInferenceConfig *AsyncInferenceConfig `json:"AsyncInferenceConfig"`
	DataCaptureConfig    *DataCaptureConfig    `json:"DataCaptureConfig"`
	EndpointConfigName   string                `json:"EndpointConfigName"`
	KmsKeyID             *string               `json:"KmsKeyId"`
	ProductionVariants   []ProductionVariant   `json:"ProductionVariants"`
	Tags                 []Tag                 `json:"Tags"`
}
