package shared

import (
	"time"
)

// JobMetadata
// Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action.
type JobMetadata struct {
	AddressID                    *string                       `json:"AddressId,omitempty"`
	ClusterID                    *string                       `json:"ClusterId,omitempty"`
	CreationDate                 *time.Time                    `json:"CreationDate,omitempty"`
	DataTransferProgress         *DataTransfer                 `json:"DataTransferProgress,omitempty"`
	Description                  *string                       `json:"Description,omitempty"`
	DeviceConfiguration          *DeviceConfiguration          `json:"DeviceConfiguration,omitempty"`
	ForwardingAddressID          *string                       `json:"ForwardingAddressId,omitempty"`
	JobID                        *string                       `json:"JobId,omitempty"`
	JobLogInfo                   *JobLogs                      `json:"JobLogInfo,omitempty"`
	JobState                     *JobStateEnum                 `json:"JobState,omitempty"`
	JobType                      *JobTypeEnum                  `json:"JobType,omitempty"`
	KmsKeyArn                    *string                       `json:"KmsKeyARN,omitempty"`
	LongTermPricingID            *string                       `json:"LongTermPricingId,omitempty"`
	Notification                 *Notification                 `json:"Notification,omitempty"`
	OnDeviceServiceConfiguration *OnDeviceServiceConfiguration `json:"OnDeviceServiceConfiguration,omitempty"`
	RemoteManagement             *RemoteManagementEnum         `json:"RemoteManagement,omitempty"`
	Resources                    *JobResource                  `json:"Resources,omitempty"`
	RoleArn                      *string                       `json:"RoleARN,omitempty"`
	ShippingDetails              *ShippingDetails              `json:"ShippingDetails,omitempty"`
	SnowballCapacityPreference   *SnowballCapacityEnum         `json:"SnowballCapacityPreference,omitempty"`
	SnowballType                 *SnowballTypeEnum             `json:"SnowballType,omitempty"`
	TaxDocuments                 *TaxDocuments                 `json:"TaxDocuments,omitempty"`
}
