package shared

// AwsEc2VpnConnectionRoutesDetails
// A static routes associated with the VPN connection.
type AwsEc2VpnConnectionRoutesDetails struct {
	DestinationCidrBlock *string `json:"DestinationCidrBlock,omitempty"`
	State                *string `json:"State,omitempty"`
}
