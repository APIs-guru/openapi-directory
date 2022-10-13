package shared

type CreateJobRequest struct {
	AddressID                    *string                       `json:"AddressId"`
	ClusterID                    *string                       `json:"ClusterId"`
	Description                  *string                       `json:"Description"`
	DeviceConfiguration          *DeviceConfiguration          `json:"DeviceConfiguration"`
	ForwardingAddressID          *string                       `json:"ForwardingAddressId"`
	JobType                      *JobTypeEnum                  `json:"JobType"`
	KmsKeyArn                    *string                       `json:"KmsKeyARN"`
	LongTermPricingID            *string                       `json:"LongTermPricingId"`
	Notification                 *Notification                 `json:"Notification"`
	OnDeviceServiceConfiguration *OnDeviceServiceConfiguration `json:"OnDeviceServiceConfiguration"`
	RemoteManagement             *RemoteManagementEnum         `json:"RemoteManagement"`
	Resources                    *JobResource                  `json:"Resources"`
	RoleArn                      *string                       `json:"RoleARN"`
	ShippingOption               *ShippingOptionEnum           `json:"ShippingOption"`
	SnowballCapacityPreference   *SnowballCapacityEnum         `json:"SnowballCapacityPreference"`
	SnowballType                 *SnowballTypeEnum             `json:"SnowballType"`
	TaxDocuments                 *TaxDocuments                 `json:"TaxDocuments"`
}
