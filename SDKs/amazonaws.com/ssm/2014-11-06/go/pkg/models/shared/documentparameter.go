package shared

// DocumentParameter
// Parameters specified in a System Manager document that run on the server when the command is run.
type DocumentParameter struct {
	DefaultValue *string                    `json:"DefaultValue,omitempty"`
	Description  *string                    `json:"Description,omitempty"`
	Name         *string                    `json:"Name,omitempty"`
	Type         *DocumentParameterTypeEnum `json:"Type,omitempty"`
}
