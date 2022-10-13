package shared

type AwsEc2VpnConnectionRoutesDetails struct {
	DestinationCidrBlock *string `json:"DestinationCidrBlock"`
	State                *string `json:"State"`
}
