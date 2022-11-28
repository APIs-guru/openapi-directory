package shared

type LogicalNetworkInterfaceNetworkTypeEnum string

const (
	LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified LogicalNetworkInterfaceNetworkTypeEnum = "TYPE_UNSPECIFIED"
	LogicalNetworkInterfaceNetworkTypeEnumClient          LogicalNetworkInterfaceNetworkTypeEnum = "CLIENT"
	LogicalNetworkInterfaceNetworkTypeEnumPrivate         LogicalNetworkInterfaceNetworkTypeEnum = "PRIVATE"
)

// LogicalNetworkInterface
// Each logical network interface is effectively a network and IP pair.
type LogicalNetworkInterface struct {
	DefaultGateway *bool                                   `json:"defaultGateway,omitempty"`
	ID             *string                                 `json:"id,omitempty"`
	IPAddress      *string                                 `json:"ipAddress,omitempty"`
	Network        *string                                 `json:"network,omitempty"`
	NetworkType    *LogicalNetworkInterfaceNetworkTypeEnum `json:"networkType,omitempty"`
}
