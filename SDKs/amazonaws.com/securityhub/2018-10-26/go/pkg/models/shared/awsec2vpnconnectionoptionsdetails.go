package shared

type AwsEc2VpnConnectionOptionsDetails struct {
	StaticRoutesOnly *bool                                            `json:"StaticRoutesOnly"`
	TunnelOptions    []AwsEc2VpnConnectionOptionsTunnelOptionsDetails `json:"TunnelOptions"`
}
