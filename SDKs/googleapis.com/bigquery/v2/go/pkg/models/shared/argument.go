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

type Argument struct {
	ArgumentKind *ArgumentArgumentKindEnum `json:"argumentKind"`
	DataType     *StandardSQLDataType      `json:"dataType"`
	Mode         *ArgumentModeEnum         `json:"mode"`
	Name         *string                   `json:"name"`
}
