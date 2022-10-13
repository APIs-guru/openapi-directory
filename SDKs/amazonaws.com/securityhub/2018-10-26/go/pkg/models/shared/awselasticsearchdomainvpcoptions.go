package shared

type AwsElasticsearchDomainVpcOptions struct {
	AvailabilityZones []string `json:"AvailabilityZones"`
	SecurityGroupIds  []string `json:"SecurityGroupIds"`
	SubnetIds         []string `json:"SubnetIds"`
	VpcID             *string  `json:"VPCId"`
}
