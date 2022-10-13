package shared

type UpdateJobRequest struct {
	AddressID                    *string                       `json:"AddressId"`
	Description                  *string                       `json:"Description"`
	ForwardingAddressID          *string                       `json:"ForwardingAddressId"`
	JobID                        string                        `json:"JobId"`
	Notification                 *Notification                 `json:"Notification"`
	OnDeviceServiceConfiguration *OnDeviceServiceConfiguration `json:"OnDeviceServiceConfiguration"`
	Resources                    *JobResource                  `json:"Resources"`
	RoleArn                      *string                       `json:"RoleARN"`
	ShippingOption               *ShippingOptionEnum           `json:"ShippingOption"`
	SnowballCapacityPreference   *SnowballCapacityEnum         `json:"SnowballCapacityPreference"`
}
