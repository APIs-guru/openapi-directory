package shared

type TargetRoleEnum string

const (
	TargetRoleEnumReadWrite TargetRoleEnum = "READ_WRITE"
	TargetRoleEnumReadOnly  TargetRoleEnum = "READ_ONLY"
	TargetRoleEnumUnknown   TargetRoleEnum = "UNKNOWN"
)
