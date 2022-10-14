package shared

type CreateClusterRequest struct {
	AddressID                    string                        `json:"AddressId"`
	Description                  *string                       `json:"Description,omitempty"`
	ForwardingAddressID          *string                       `json:"ForwardingAddressId,omitempty"`
	JobType                      JobTypeEnum                   `json:"JobType"`
	KmsKeyArn                    *string                       `json:"KmsKeyARN,omitempty"`
	Notification                 *Notification                 `json:"Notification,omitempty"`
	OnDeviceServiceConfiguration *OnDeviceServiceConfiguration `json:"OnDeviceServiceConfiguration,omitempty"`
	RemoteManagement             *RemoteManagementEnum         `json:"RemoteManagement,omitempty"`
	Resources                    JobResource                   `json:"Resources"`
	RoleArn                      string                        `json:"RoleARN"`
	ShippingOption               ShippingOptionEnum            `json:"ShippingOption"`
	SnowballType                 SnowballTypeEnum              `json:"SnowballType"`
	TaxDocuments                 *TaxDocuments                 `json:"TaxDocuments,omitempty"`
}
