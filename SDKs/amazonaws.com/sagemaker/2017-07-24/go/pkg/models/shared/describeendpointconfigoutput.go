package shared

import (
	"time"
)

type DescribeEndpointConfigOutput struct {
	AsyncInferenceConfig *AsyncInferenceConfig `json:"AsyncInferenceConfig"`
	CreationTime         time.Time             `json:"CreationTime"`
	DataCaptureConfig    *DataCaptureConfig    `json:"DataCaptureConfig"`
	EndpointConfigArn    string                `json:"EndpointConfigArn"`
	EndpointConfigName   string                `json:"EndpointConfigName"`
	KmsKeyID             *string               `json:"KmsKeyId"`
	ProductionVariants   []ProductionVariant   `json:"ProductionVariants"`
}
