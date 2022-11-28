package shared

type ArgumentArgumentKindEnum string

const (
	ArgumentArgumentKindEnumArgumentKindUnspecified ArgumentArgumentKindEnum = "ARGUMENT_KIND_UNSPECIFIED"
	ArgumentArgumentKindEnumFixedType               ArgumentArgumentKindEnum = "FIXED_TYPE"
	ArgumentArgumentKindEnumAnyType                 ArgumentArgumentKindEnum = "ANY_TYPE"
)

type ArgumentModeEnum string

const (
	ArgumentModeEnumModeUnspecified ArgumentModeEnum = "MODE_UNSPECIFIED"
	ArgumentModeEnumIn              ArgumentModeEnum = "IN"
	ArgumentModeEnumOut             ArgumentModeEnum = "OUT"
	ArgumentModeEnumInout           ArgumentModeEnum = "INOUT"
)

// Argument
// Input/output argument of a function or a stored procedure.
type Argument struct {
	ArgumentKind *ArgumentArgumentKindEnum `json:"argumentKind,omitempty"`
	DataType     *StandardSQLDataType      `json:"dataType,omitempty"`
	Mode         *ArgumentModeEnum         `json:"mode,omitempty"`
	Name         *string                   `json:"name,omitempty"`
}
