package shared

type ContainerServiceProtocolEnum string

const (
	ContainerServiceProtocolEnumHTTP  ContainerServiceProtocolEnum = "HTTP"
	ContainerServiceProtocolEnumHTTPS ContainerServiceProtocolEnum = "HTTPS"
	ContainerServiceProtocolEnumTCP   ContainerServiceProtocolEnum = "TCP"
	ContainerServiceProtocolEnumUDP   ContainerServiceProtocolEnum = "UDP"
)
