package shared

type UpdateJobRequest struct {
	AddressID                    *string                       `json:"AddressId,omitempty"`
	Description                  *string                       `json:"Description,omitempty"`
	ForwardingAddressID          *string                       `json:"ForwardingAddressId,omitempty"`
	JobID                        string                        `json:"JobId"`
	Notification                 *Notification                 `json:"Notification,omitempty"`
	OnDeviceServiceConfiguration *OnDeviceServiceConfiguration `json:"OnDeviceServiceConfiguration,omitempty"`
	Resources                    *JobResource                  `json:"Resources,omitempty"`
	RoleArn                      *string                       `json:"RoleARN,omitempty"`
	ShippingOption               *ShippingOptionEnum           `json:"ShippingOption,omitempty"`
	SnowballCapacityPreference   *SnowballCapacityEnum         `json:"SnowballCapacityPreference,omitempty"`
}
