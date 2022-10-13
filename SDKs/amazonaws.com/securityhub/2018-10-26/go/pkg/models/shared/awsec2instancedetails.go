package shared

type AwsEc2InstanceDetails struct {
	IamInstanceProfileArn *string                                  `json:"IamInstanceProfileArn"`
	ImageID               *string                                  `json:"ImageId"`
	IPV4Addresses         []string                                 `json:"IpV4Addresses"`
	IPV6Addresses         []string                                 `json:"IpV6Addresses"`
	KeyName               *string                                  `json:"KeyName"`
	LaunchedAt            *string                                  `json:"LaunchedAt"`
	NetworkInterfaces     []AwsEc2InstanceNetworkInterfacesDetails `json:"NetworkInterfaces"`
	SubnetID              *string                                  `json:"SubnetId"`
	Type                  *string                                  `json:"Type"`
	VpcID                 *string                                  `json:"VpcId"`
}
