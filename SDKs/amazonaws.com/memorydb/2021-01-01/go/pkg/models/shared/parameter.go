package shared

// Parameter
// Describes an individual setting that controls some aspect of MemoryDB behavior.
type Parameter struct {
	AllowedValues        *string `json:"AllowedValues,omitempty"`
	DataType             *string `json:"DataType,omitempty"`
	Description          *string `json:"Description,omitempty"`
	MinimumEngineVersion *string `json:"MinimumEngineVersion,omitempty"`
	Name                 *string `json:"Name,omitempty"`
	Value                *string `json:"Value,omitempty"`
}
