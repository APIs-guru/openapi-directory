package shared



type EndpointDetails struct {
    AddressAllocationIds []string `json:"AddressAllocationIds,omitempty"`
    SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
    SubnetIds []string `json:"SubnetIds,omitempty"`
    VpcEndpointID *string `json:"VpcEndpointId,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

