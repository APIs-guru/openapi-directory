package shared

type ConfigTransportProtocolEnum string

const (
	ConfigTransportProtocolEnumTransportProtocolUnspecified ConfigTransportProtocolEnum = "TRANSPORT_PROTOCOL_UNSPECIFIED"
	ConfigTransportProtocolEnumTCP                          ConfigTransportProtocolEnum = "TCP"
)

type Config struct {
	DestinationRoutes []DestinationRoute           `json:"destinationRoutes,omitempty"`
	TransportProtocol *ConfigTransportProtocolEnum `json:"transportProtocol,omitempty"`
}
