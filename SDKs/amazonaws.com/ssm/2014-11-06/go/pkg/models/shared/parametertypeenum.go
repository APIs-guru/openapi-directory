package shared

type ParameterTypeEnum string

const (
	ParameterTypeEnumString       ParameterTypeEnum = "String"
	ParameterTypeEnumStringList   ParameterTypeEnum = "StringList"
	ParameterTypeEnumSecureString ParameterTypeEnum = "SecureString"
)
