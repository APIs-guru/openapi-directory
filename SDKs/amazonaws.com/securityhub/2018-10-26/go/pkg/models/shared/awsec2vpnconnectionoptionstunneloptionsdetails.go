package shared

type AwsEc2VpnConnectionOptionsTunnelOptionsDetails struct {
	DpdTimeoutSeconds          *int64   `json:"DpdTimeoutSeconds,omitempty"`
	IkeVersions                []string `json:"IkeVersions,omitempty"`
	OutsideIPAddress           *string  `json:"OutsideIpAddress,omitempty"`
	Phase1DhGroupNumbers       []int64  `json:"Phase1DhGroupNumbers,omitempty"`
	Phase1EncryptionAlgorithms []string `json:"Phase1EncryptionAlgorithms,omitempty"`
	Phase1IntegrityAlgorithms  []string `json:"Phase1IntegrityAlgorithms,omitempty"`
	Phase1LifetimeSeconds      *int64   `json:"Phase1LifetimeSeconds,omitempty"`
	Phase2DhGroupNumbers       []int64  `json:"Phase2DhGroupNumbers,omitempty"`
	Phase2EncryptionAlgorithms []string `json:"Phase2EncryptionAlgorithms,omitempty"`
	Phase2IntegrityAlgorithms  []string `json:"Phase2IntegrityAlgorithms,omitempty"`
	Phase2LifetimeSeconds      *int64   `json:"Phase2LifetimeSeconds,omitempty"`
	PreSharedKey               *string  `json:"PreSharedKey,omitempty"`
	RekeyFuzzPercentage        *int64   `json:"RekeyFuzzPercentage,omitempty"`
	RekeyMarginTimeSeconds     *int64   `json:"RekeyMarginTimeSeconds,omitempty"`
	ReplayWindowSize           *int64   `json:"ReplayWindowSize,omitempty"`
	TunnelInsideCidr           *string  `json:"TunnelInsideCidr,omitempty"`
}
