package shared

type NetworkProtocolEnum string

const (
	NetworkProtocolEnumTCP  NetworkProtocolEnum = "tcp"
	NetworkProtocolEnumAll  NetworkProtocolEnum = "all"
	NetworkProtocolEnumUDP  NetworkProtocolEnum = "udp"
	NetworkProtocolEnumIcmp NetworkProtocolEnum = "icmp"
)
