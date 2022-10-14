package shared

import (
	"time"
)

type DescribeAppImageConfigResponse struct {
	AppImageConfigArn        *string                   `json:"AppImageConfigArn,omitempty"`
	AppImageConfigName       *string                   `json:"AppImageConfigName,omitempty"`
	CreationTime             *time.Time                `json:"CreationTime,omitempty"`
	KernelGatewayImageConfig *KernelGatewayImageConfig `json:"KernelGatewayImageConfig,omitempty"`
	LastModifiedTime         *time.Time                `json:"LastModifiedTime,omitempty"`
}
