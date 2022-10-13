package shared

type CreateClusterRequest struct {
	AddressID                    string                        `json:"AddressId"`
	Description                  *string                       `json:"Description"`
	ForwardingAddressID          *string                       `json:"ForwardingAddressId"`
	JobType                      JobTypeEnum                   `json:"JobType"`
	KmsKeyArn                    *string                       `json:"KmsKeyARN"`
	Notification                 *Notification                 `json:"Notification"`
	OnDeviceServiceConfiguration *OnDeviceServiceConfiguration `json:"OnDeviceServiceConfiguration"`
	RemoteManagement             *RemoteManagementEnum         `json:"RemoteManagement"`
	Resources                    JobResource                   `json:"Resources"`
	RoleArn                      string                        `json:"RoleARN"`
	ShippingOption               ShippingOptionEnum            `json:"ShippingOption"`
	SnowballType                 SnowballTypeEnum              `json:"SnowballType"`
	TaxDocuments                 *TaxDocuments                 `json:"TaxDocuments"`
}
