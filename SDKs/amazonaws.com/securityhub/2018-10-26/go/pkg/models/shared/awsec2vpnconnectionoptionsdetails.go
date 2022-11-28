package shared

// AwsEc2VpnConnectionOptionsDetails
// VPN connection options.
type AwsEc2VpnConnectionOptionsDetails struct {
	StaticRoutesOnly *bool                                            `json:"StaticRoutesOnly,omitempty"`
	TunnelOptions    []AwsEc2VpnConnectionOptionsTunnelOptionsDetails `json:"TunnelOptions,omitempty"`
}
