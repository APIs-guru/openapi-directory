package shared

type EnvironmentAccessTypeEnum string

const (
	EnvironmentAccessTypeEnumFull     EnvironmentAccessTypeEnum = "full"
	EnvironmentAccessTypeEnumReadOnly EnvironmentAccessTypeEnum = "readOnly"
	EnvironmentAccessTypeEnumNone     EnvironmentAccessTypeEnum = "none"
)
