package shared

// AwsEc2NetworkInterfacePrivateIPAddressDetail
// Provides information about a private IPv4 address that is with the network interface.
type AwsEc2NetworkInterfacePrivateIPAddressDetail struct {
	PrivateDNSName   *string `json:"PrivateDnsName,omitempty"`
	PrivateIPAddress *string `json:"PrivateIpAddress,omitempty"`
}
