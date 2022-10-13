package shared

type AwsEc2VpnConnectionOptionsTunnelOptionsDetails struct {
	DpdTimeoutSeconds          *int64   `json:"DpdTimeoutSeconds"`
	IkeVersions                []string `json:"IkeVersions"`
	OutsideIPAddress           *string  `json:"OutsideIpAddress"`
	Phase1DhGroupNumbers       []int64  `json:"Phase1DhGroupNumbers"`
	Phase1EncryptionAlgorithms []string `json:"Phase1EncryptionAlgorithms"`
	Phase1IntegrityAlgorithms  []string `json:"Phase1IntegrityAlgorithms"`
	Phase1LifetimeSeconds      *int64   `json:"Phase1LifetimeSeconds"`
	Phase2DhGroupNumbers       []int64  `json:"Phase2DhGroupNumbers"`
	Phase2EncryptionAlgorithms []string `json:"Phase2EncryptionAlgorithms"`
	Phase2IntegrityAlgorithms  []string `json:"Phase2IntegrityAlgorithms"`
	Phase2LifetimeSeconds      *int64   `json:"Phase2LifetimeSeconds"`
	PreSharedKey               *string  `json:"PreSharedKey"`
	RekeyFuzzPercentage        *int64   `json:"RekeyFuzzPercentage"`
	RekeyMarginTimeSeconds     *int64   `json:"RekeyMarginTimeSeconds"`
	ReplayWindowSize           *int64   `json:"ReplayWindowSize"`
	TunnelInsideCidr           *string  `json:"TunnelInsideCidr"`
}
