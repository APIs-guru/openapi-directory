package shared

// Parameter
// <p> This data type is used as a request parameter in the <code>ModifyDBParameterGroup</code> and <code>ResetDBParameterGroup</code> actions. </p> <p>This data type is used as a response element in the <code>DescribeEngineDefaultParameters</code> and <code>DescribeDBParameters</code> actions.</p>
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
	SupportedEngineModes []string
}
