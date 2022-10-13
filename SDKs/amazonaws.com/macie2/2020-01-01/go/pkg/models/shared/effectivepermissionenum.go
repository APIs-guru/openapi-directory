package shared

type EffectivePermissionEnum string

const (
	EffectivePermissionEnumPublic    EffectivePermissionEnum = "PUBLIC"
	EffectivePermissionEnumNotPublic EffectivePermissionEnum = "NOT_PUBLIC"
	EffectivePermissionEnumUnknown   EffectivePermissionEnum = "UNKNOWN"
)
