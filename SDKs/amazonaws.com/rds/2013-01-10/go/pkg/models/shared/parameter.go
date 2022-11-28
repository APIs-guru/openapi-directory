package shared

type Parameter struct {
	AllowedValues        *string
	ApplyMethod          *ApplyMethodEnum
	ApplyType            *string
	DataType             *string
	Description          *string
	IsModifiable         *bool
	MinimumEngineVersion *string
	ParameterName        *string
	ParameterValue       *string
	Source               *string
}
