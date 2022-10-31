package shared

import (
	"time"
)

type DescribeEndpointOutput struct {
	AsyncInferenceConfig *AsyncInferenceConfig      `json:"AsyncInferenceConfig,omitempty"`
	CreationTime         time.Time                  `json:"CreationTime"`
	DataCaptureConfig    *DataCaptureConfigSummary  `json:"DataCaptureConfig,omitempty"`
	EndpointArn          string                     `json:"EndpointArn"`
	EndpointConfigName   string                     `json:"EndpointConfigName"`
	EndpointName         string                     `json:"EndpointName"`
	EndpointStatus       EndpointStatusEnum         `json:"EndpointStatus"`
	FailureReason        *string                    `json:"FailureReason,omitempty"`
	LastDeploymentConfig *DeploymentConfig          `json:"LastDeploymentConfig,omitempty"`
	LastModifiedTime     time.Time                  `json:"LastModifiedTime"`
	ProductionVariants   []ProductionVariantSummary `json:"ProductionVariants,omitempty"`
}
