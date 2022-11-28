package shared

type DbProxyStatusEnum string

const (
	DbProxyStatusEnumAvailable                  DbProxyStatusEnum = "available"
	DbProxyStatusEnumModifying                  DbProxyStatusEnum = "modifying"
	DbProxyStatusEnumIncompatibleNetwork        DbProxyStatusEnum = "incompatible-network"
	DbProxyStatusEnumInsufficientResourceLimits DbProxyStatusEnum = "insufficient-resource-limits"
	DbProxyStatusEnumCreating                   DbProxyStatusEnum = "creating"
	DbProxyStatusEnumDeleting                   DbProxyStatusEnum = "deleting"
	DbProxyStatusEnumSuspended                  DbProxyStatusEnum = "suspended"
	DbProxyStatusEnumSuspending                 DbProxyStatusEnum = "suspending"
	DbProxyStatusEnumReactivating               DbProxyStatusEnum = "reactivating"
)
