package shared

type UserRoleEnum string

const (
	UserRoleEnumUser       UserRoleEnum = "USER"
	UserRoleEnumResource   UserRoleEnum = "RESOURCE"
	UserRoleEnumSystemUser UserRoleEnum = "SYSTEM_USER"
)
