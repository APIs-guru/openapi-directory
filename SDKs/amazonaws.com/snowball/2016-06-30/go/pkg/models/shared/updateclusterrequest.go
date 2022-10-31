package shared



type UpdateClusterRequest struct {
    AddressID *string `json:"AddressId,omitempty"`
    ClusterID string `json:"ClusterId"`
    Description *string `json:"Description,omitempty"`
    ForwardingAddressID *string `json:"ForwardingAddressId,omitempty"`
    Notification *Notification `json:"Notification,omitempty"`
    OnDeviceServiceConfiguration *OnDeviceServiceConfiguration `json:"OnDeviceServiceConfiguration,omitempty"`
    Resources *JobResource `json:"Resources,omitempty"`
    RoleArn *string `json:"RoleARN,omitempty"`
    ShippingOption *ShippingOptionEnum `json:"ShippingOption,omitempty"`
    
}

