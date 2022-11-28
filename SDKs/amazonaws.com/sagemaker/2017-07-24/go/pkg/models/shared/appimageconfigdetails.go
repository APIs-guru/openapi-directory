package shared

import (
	"time"
)

// AppImageConfigDetails
// The configuration for running a SageMaker image as a KernelGateway app.
type AppImageConfigDetails struct {
	AppImageConfigArn        *string                   `json:"AppImageConfigArn,omitempty"`
	AppImageConfigName       *string                   `json:"AppImageConfigName,omitempty"`
	CreationTime             *time.Time                `json:"CreationTime,omitempty"`
	KernelGatewayImageConfig *KernelGatewayImageConfig `json:"KernelGatewayImageConfig,omitempty"`
	LastModifiedTime         *time.Time                `json:"LastModifiedTime,omitempty"`
}
