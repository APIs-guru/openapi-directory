package shared

import (
	"time"
)

type JobMetadata struct {
	AddressID                    *string                       `json:"AddressId"`
	ClusterID                    *string                       `json:"ClusterId"`
	CreationDate                 *time.Time                    `json:"CreationDate"`
	DataTransferProgress         *DataTransfer                 `json:"DataTransferProgress"`
	Description                  *string                       `json:"Description"`
	DeviceConfiguration          *DeviceConfiguration          `json:"DeviceConfiguration"`
	ForwardingAddressID          *string                       `json:"ForwardingAddressId"`
	JobID                        *string                       `json:"JobId"`
	JobLogInfo                   *JobLogs                      `json:"JobLogInfo"`
	JobState                     *JobStateEnum                 `json:"JobState"`
	JobType                      *JobTypeEnum                  `json:"JobType"`
	KmsKeyArn                    *string                       `json:"KmsKeyARN"`
	LongTermPricingID            *string                       `json:"LongTermPricingId"`
	Notification                 *Notification                 `json:"Notification"`
	OnDeviceServiceConfiguration *OnDeviceServiceConfiguration `json:"OnDeviceServiceConfiguration"`
	RemoteManagement             *RemoteManagementEnum         `json:"RemoteManagement"`
	Resources                    *JobResource                  `json:"Resources"`
	RoleArn                      *string                       `json:"RoleARN"`
	ShippingDetails              *ShippingDetails              `json:"ShippingDetails"`
	SnowballCapacityPreference   *SnowballCapacityEnum         `json:"SnowballCapacityPreference"`
	SnowballType                 *SnowballTypeEnum             `json:"SnowballType"`
	TaxDocuments                 *TaxDocuments                 `json:"TaxDocuments"`
}
