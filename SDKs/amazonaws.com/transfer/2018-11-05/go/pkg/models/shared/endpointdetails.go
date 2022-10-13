package shared

type EndpointDetails struct {
	AddressAllocationIds []string `json:"AddressAllocationIds"`
	SecurityGroupIds     []string `json:"SecurityGroupIds"`
	SubnetIds            []string `json:"SubnetIds"`
	VpcEndpointID        *string  `json:"VpcEndpointId"`
	VpcID                *string  `json:"VpcId"`
}
