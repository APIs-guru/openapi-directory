package shared

type LogicalNetworkInterfaceNetworkTypeEnum string

const (
	LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified LogicalNetworkInterfaceNetworkTypeEnum = "TYPE_UNSPECIFIED"
	LogicalNetworkInterfaceNetworkTypeEnumClient          LogicalNetworkInterfaceNetworkTypeEnum = "CLIENT"
	LogicalNetworkInterfaceNetworkTypeEnumPrivate         LogicalNetworkInterfaceNetworkTypeEnum = "PRIVATE"
)

type LogicalNetworkInterface struct {
	DefaultGateway *bool                                   `json:"defaultGateway"`
	ID             *string                                 `json:"id"`
	IPAddress      *string                                 `json:"ipAddress"`
	Network        *string                                 `json:"network"`
	NetworkType    *LogicalNetworkInterfaceNetworkTypeEnum `json:"networkType"`
}
