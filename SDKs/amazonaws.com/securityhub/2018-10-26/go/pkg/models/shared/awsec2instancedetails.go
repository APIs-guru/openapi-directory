package shared

// AwsEc2InstanceDetails
// The details of an EC2 instance.
type AwsEc2InstanceDetails struct {
	IamInstanceProfileArn *string                                  `json:"IamInstanceProfileArn,omitempty"`
	ImageID               *string                                  `json:"ImageId,omitempty"`
	IPV4Addresses         []string                                 `json:"IpV4Addresses,omitempty"`
	IPV6Addresses         []string                                 `json:"IpV6Addresses,omitempty"`
	KeyName               *string                                  `json:"KeyName,omitempty"`
	LaunchedAt            *string                                  `json:"LaunchedAt,omitempty"`
	NetworkInterfaces     []AwsEc2InstanceNetworkInterfacesDetails `json:"NetworkInterfaces,omitempty"`
	SubnetID              *string                                  `json:"SubnetId,omitempty"`
	Type                  *string                                  `json:"Type,omitempty"`
	VpcID                 *string                                  `json:"VpcId,omitempty"`
}
