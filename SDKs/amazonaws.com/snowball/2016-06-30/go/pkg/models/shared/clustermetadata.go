package shared

import (
	"time"
)

type ClusterMetadata struct {
	AddressID                    *string                       `json:"AddressId"`
	ClusterID                    *string                       `json:"ClusterId"`
	ClusterState                 *ClusterStateEnum             `json:"ClusterState"`
	CreationDate                 *time.Time                    `json:"CreationDate"`
	Description                  *string                       `json:"Description"`
	ForwardingAddressID          *string                       `json:"ForwardingAddressId"`
	JobType                      *JobTypeEnum                  `json:"JobType"`
	KmsKeyArn                    *string                       `json:"KmsKeyARN"`
	Notification                 *Notification                 `json:"Notification"`
	OnDeviceServiceConfiguration *OnDeviceServiceConfiguration `json:"OnDeviceServiceConfiguration"`
	Resources                    *JobResource                  `json:"Resources"`
	RoleArn                      *string                       `json:"RoleARN"`
	ShippingOption               *ShippingOptionEnum           `json:"ShippingOption"`
	SnowballType                 *SnowballTypeEnum             `json:"SnowballType"`
	TaxDocuments                 *TaxDocuments                 `json:"TaxDocuments"`
}
