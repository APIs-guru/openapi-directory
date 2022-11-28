package shared

// Parameter
// Describes a parameter in a cluster parameter group.
type Parameter struct {
	AllowedValues        *string
	ApplyType            *ParameterApplyTypeEnum
	DataType             *string
	Description          *string
	IsModifiable         *bool
	MinimumEngineVersion *string
	ParameterName        *string
	ParameterValue       *string
	Source               *string
}
