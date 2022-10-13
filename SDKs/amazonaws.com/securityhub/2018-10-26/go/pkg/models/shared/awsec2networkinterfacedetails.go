package shared

type AwsEc2NetworkInterfaceDetails struct {
	Attachment         *AwsEc2NetworkInterfaceAttachment              `json:"Attachment"`
	IPV6Addresses      []AwsEc2NetworkInterfaceIPV6AddressDetail      `json:"IpV6Addresses"`
	NetworkInterfaceID *string                                        `json:"NetworkInterfaceId"`
	PrivateIPAddresses []AwsEc2NetworkInterfacePrivateIPAddressDetail `json:"PrivateIpAddresses"`
	PublicDNSName      *string                                        `json:"PublicDnsName"`
	PublicIP           *string                                        `json:"PublicIp"`
	SecurityGroups     []AwsEc2NetworkInterfaceSecurityGroup          `json:"SecurityGroups"`
	SourceDestCheck    *bool                                          `json:"SourceDestCheck"`
}
