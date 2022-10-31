package shared

type ConnectorStatusEnum string

const (
	ConnectorStatusEnumHealthy   ConnectorStatusEnum = "HEALTHY"
	ConnectorStatusEnumUnhealthy ConnectorStatusEnum = "UNHEALTHY"
)
