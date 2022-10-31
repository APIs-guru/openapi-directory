package shared

type AwsElasticsearchDomainVpcOptions struct {
	AvailabilityZones []string `json:"AvailabilityZones,omitempty"`
	SecurityGroupIds  []string `json:"SecurityGroupIds,omitempty"`
	SubnetIds         []string `json:"SubnetIds,omitempty"`
	VpcID             *string  `json:"VPCId,omitempty"`
}
