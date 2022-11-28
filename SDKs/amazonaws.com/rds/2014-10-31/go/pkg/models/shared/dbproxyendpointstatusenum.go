package shared

type DbProxyEndpointStatusEnum string

const (
	DbProxyEndpointStatusEnumAvailable                  DbProxyEndpointStatusEnum = "available"
	DbProxyEndpointStatusEnumModifying                  DbProxyEndpointStatusEnum = "modifying"
	DbProxyEndpointStatusEnumIncompatibleNetwork        DbProxyEndpointStatusEnum = "incompatible-network"
	DbProxyEndpointStatusEnumInsufficientResourceLimits DbProxyEndpointStatusEnum = "insufficient-resource-limits"
	DbProxyEndpointStatusEnumCreating                   DbProxyEndpointStatusEnum = "creating"
	DbProxyEndpointStatusEnumDeleting                   DbProxyEndpointStatusEnum = "deleting"
)
