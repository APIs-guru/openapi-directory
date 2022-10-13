package shared

import (
	"time"
)

type AppImageConfigDetails struct {
	AppImageConfigArn        *string                   `json:"AppImageConfigArn"`
	AppImageConfigName       *string                   `json:"AppImageConfigName"`
	CreationTime             *time.Time                `json:"CreationTime"`
	KernelGatewayImageConfig *KernelGatewayImageConfig `json:"KernelGatewayImageConfig"`
	LastModifiedTime         *time.Time                `json:"LastModifiedTime"`
}
