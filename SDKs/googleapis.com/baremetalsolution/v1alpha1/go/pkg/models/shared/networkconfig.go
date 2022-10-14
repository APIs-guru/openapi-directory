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
	Bandwidth       *NetworkConfigBandwidthEnum   `json:"bandwidth,omitempty"`
	Cidr            *string                       `json:"cidr,omitempty"`
	ID              *string                       `json:"id,omitempty"`
	Location        *string                       `json:"location,omitempty"`
	ServiceCidr     *NetworkConfigServiceCidrEnum `json:"serviceCidr,omitempty"`
	Type            *NetworkConfigTypeEnum        `json:"type,omitempty"`
	UserNote        *string                       `json:"userNote,omitempty"`
	VlanAttachments []VlanAttachment              `json:"vlanAttachments,omitempty"`
}
