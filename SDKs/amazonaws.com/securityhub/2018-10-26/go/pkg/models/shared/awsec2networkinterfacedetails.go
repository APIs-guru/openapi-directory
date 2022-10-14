package shared

type AwsEc2NetworkInterfaceDetails struct {
	Attachment         *AwsEc2NetworkInterfaceAttachment              `json:"Attachment,omitempty"`
	IPV6Addresses      []AwsEc2NetworkInterfaceIPV6AddressDetail      `json:"IpV6Addresses,omitempty"`
	NetworkInterfaceID *string                                        `json:"NetworkInterfaceId,omitempty"`
	PrivateIPAddresses []AwsEc2NetworkInterfacePrivateIPAddressDetail `json:"PrivateIpAddresses,omitempty"`
	PublicDNSName      *string                                        `json:"PublicDnsName,omitempty"`
	PublicIP           *string                                        `json:"PublicIp,omitempty"`
	SecurityGroups     []AwsEc2NetworkInterfaceSecurityGroup          `json:"SecurityGroups,omitempty"`
	SourceDestCheck    *bool                                          `json:"SourceDestCheck,omitempty"`
}
