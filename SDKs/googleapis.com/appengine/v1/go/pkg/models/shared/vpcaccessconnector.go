package shared

type VpcAccessConnectorEgressSettingEnum string

const (
	VpcAccessConnectorEgressSettingEnumEgressSettingUnspecified VpcAccessConnectorEgressSettingEnum = "EGRESS_SETTING_UNSPECIFIED"
	VpcAccessConnectorEgressSettingEnumAllTraffic               VpcAccessConnectorEgressSettingEnum = "ALL_TRAFFIC"
	VpcAccessConnectorEgressSettingEnumPrivateIPRanges          VpcAccessConnectorEgressSettingEnum = "PRIVATE_IP_RANGES"
)

// VpcAccessConnector
// VPC access connector specification.
type VpcAccessConnector struct {
	EgressSetting *VpcAccessConnectorEgressSettingEnum `json:"egressSetting,omitempty"`
	Name          *string                              `json:"name,omitempty"`
}
