package shared

import (
	"time"
)

type DescribeEndpointConfigOutput struct {
	AsyncInferenceConfig *AsyncInferenceConfig `json:"AsyncInferenceConfig,omitempty"`
	CreationTime         time.Time             `json:"CreationTime"`
	DataCaptureConfig    *DataCaptureConfig    `json:"DataCaptureConfig,omitempty"`
	EndpointConfigArn    string                `json:"EndpointConfigArn"`
	EndpointConfigName   string                `json:"EndpointConfigName"`
	KmsKeyID             *string               `json:"KmsKeyId,omitempty"`
	ProductionVariants   []ProductionVariant   `json:"ProductionVariants"`
}
