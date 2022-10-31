package shared

type AwsEc2VpnConnectionRoutesDetails struct {
	DestinationCidrBlock *string `json:"DestinationCidrBlock,omitempty"`
	State                *string `json:"State,omitempty"`
}
