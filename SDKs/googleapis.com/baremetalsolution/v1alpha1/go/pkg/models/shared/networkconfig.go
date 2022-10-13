package shared

type NetworkConfigBandwidthEnum string

const (
	NetworkConfigBandwidthEnumBandwidthUnspecified NetworkConfigBandwidthEnum = "BANDWIDTH_UNSPECIFIED"
	NetworkConfigBandwidthEnumBw1Gbps              NetworkConfigBandwidthEnum = "BW_1_GBPS"
	NetworkConfigBandwidthEnumBw2Gbps              NetworkConfigBandwidthEnum = "BW_2_GBPS"
	NetworkConfigBandwidthEnumBw5Gbps              NetworkConfigBandwidthEnum = "BW_5_GBPS"
	NetworkConfigBandwidthEnumBw10Gbps             NetworkConfigBandwidthEnum = "BW_10_GBPS"
)

type NetworkConfigServiceCidrEnum string

const (
	NetworkConfigServiceCidrEnumServiceCidrUnspecified NetworkConfigServiceCidrEnum = "SERVICE_CIDR_UNSPECIFIED"
	NetworkConfigServiceCidrEnumDisabled               NetworkConfigServiceCidrEnum = "DISABLED"
	NetworkConfigServiceCidrEnumHigh26                 NetworkConfigServiceCidrEnum = "HIGH_26"
	NetworkConfigServiceCidrEnumHigh27                 NetworkConfigServiceCidrEnum = "HIGH_27"
	NetworkConfigServiceCidrEnumHigh28                 NetworkConfigServiceCidrEnum = "HIGH_28"
)

type NetworkConfigTypeEnum string

const (
	NetworkConfigTypeEnumTypeUnspecified NetworkConfigTypeEnum = "TYPE_UNSPECIFIED"
	NetworkConfigTypeEnumClient          NetworkConfigTypeEnum = "CLIENT"
	NetworkConfigTypeEnumPrivate         NetworkConfigTypeEnum = "PRIVATE"
)

type NetworkConfig struct {
	Bandwidth       *NetworkConfigBandwidthEnum   `json:"bandwidth"`
	Cidr            *string                       `json:"cidr"`
	ID              *string                       `json:"id"`
	Location        *string                       `json:"location"`
	ServiceCidr     *NetworkConfigServiceCidrEnum `json:"serviceCidr"`
	Type            *NetworkConfigTypeEnum        `json:"type"`
	UserNote        *string                       `json:"userNote"`
	VlanAttachments []VlanAttachment              `json:"vlanAttachments"`
}
