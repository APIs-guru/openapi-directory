package shared

type UpdateClusterRequest struct {
	AddressID                    *string                       `json:"AddressId"`
	ClusterID                    string                        `json:"ClusterId"`
	Description                  *string                       `json:"Description"`
	ForwardingAddressID          *string                       `json:"ForwardingAddressId"`
	Notification                 *Notification                 `json:"Notification"`
	OnDeviceServiceConfiguration *OnDeviceServiceConfiguration `json:"OnDeviceServiceConfiguration"`
	Resources                    *JobResource                  `json:"Resources"`
	RoleArn                      *string                       `json:"RoleARN"`
	ShippingOption               *ShippingOptionEnum           `json:"ShippingOption"`
}
