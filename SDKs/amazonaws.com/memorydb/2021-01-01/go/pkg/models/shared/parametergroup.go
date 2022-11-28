package shared

// ParameterGroup
// Represents the output of a CreateParameterGroup operation. A parameter group represents a combination of specific values for the parameters that are passed to the engine software during startup.
type ParameterGroup struct {
	Arn         *string `json:"ARN,omitempty"`
	Description *string `json:"Description,omitempty"`
	Family      *string `json:"Family,omitempty"`
	Name        *string `json:"Name,omitempty"`
}
