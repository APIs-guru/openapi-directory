package shared

type PermissionTypeEnum string

const (
	PermissionTypeEnumFullAccess   PermissionTypeEnum = "FULL_ACCESS"
	PermissionTypeEnumSendAs       PermissionTypeEnum = "SEND_AS"
	PermissionTypeEnumSendOnBehalf PermissionTypeEnum = "SEND_ON_BEHALF"
)
