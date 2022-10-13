package shared

import (
	"time"
)

type DescribeEndpointOutput struct {
	AsyncInferenceConfig *AsyncInferenceConfig      `json:"AsyncInferenceConfig"`
	CreationTime         time.Time                  `json:"CreationTime"`
	DataCaptureConfig    *DataCaptureConfigSummary  `json:"DataCaptureConfig"`
	EndpointArn          string                     `json:"EndpointArn"`
	EndpointConfigName   string                     `json:"EndpointConfigName"`
	EndpointName         string                     `json:"EndpointName"`
	EndpointStatus       EndpointStatusEnum         `json:"EndpointStatus"`
	FailureReason        *string                    `json:"FailureReason"`
	LastDeploymentConfig *DeploymentConfig          `json:"LastDeploymentConfig"`
	LastModifiedTime     time.Time                  `json:"LastModifiedTime"`
	ProductionVariants   []ProductionVariantSummary `json:"ProductionVariants"`
}
