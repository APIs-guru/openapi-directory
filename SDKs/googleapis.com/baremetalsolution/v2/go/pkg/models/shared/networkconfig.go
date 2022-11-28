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

// NetworkConfigInput
// Configuration parameters for a new network.
type NetworkConfigInput struct {
	Bandwidth          *NetworkConfigBandwidthEnum   `json:"bandwidth,omitempty"`
	Cidr               *string                       `json:"cidr,omitempty"`
	GcpService         *string                       `json:"gcpService,omitempty"`
	ID                 *string                       `json:"id,omitempty"`
	JumboFramesEnabled *bool                         `json:"jumboFramesEnabled,omitempty"`
	ServiceCidr        *NetworkConfigServiceCidrEnum `json:"serviceCidr,omitempty"`
	Type               *NetworkConfigTypeEnum        `json:"type,omitempty"`
	UserNote           *string                       `json:"userNote,omitempty"`
	VlanAttachments    []IntakeVlanAttachment        `json:"vlanAttachments,omitempty"`
	VlanSameProject    *bool                         `json:"vlanSameProject,omitempty"`
}

// NetworkConfig
// Configuration parameters for a new network.
type NetworkConfig struct {
	Bandwidth          *NetworkConfigBandwidthEnum   `json:"bandwidth,omitempty"`
	Cidr               *string                       `json:"cidr,omitempty"`
	GcpService         *string                       `json:"gcpService,omitempty"`
	ID                 *string                       `json:"id,omitempty"`
	JumboFramesEnabled *bool                         `json:"jumboFramesEnabled,omitempty"`
	Name               *string                       `json:"name,omitempty"`
	ServiceCidr        *NetworkConfigServiceCidrEnum `json:"serviceCidr,omitempty"`
	Type               *NetworkConfigTypeEnum        `json:"type,omitempty"`
	UserNote           *string                       `json:"userNote,omitempty"`
	VlanAttachments    []IntakeVlanAttachment        `json:"vlanAttachments,omitempty"`
	VlanSameProject    *bool                         `json:"vlanSameProject,omitempty"`
}
