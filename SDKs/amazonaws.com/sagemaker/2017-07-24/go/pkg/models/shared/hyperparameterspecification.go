package shared

// HyperParameterSpecification
// Defines a hyperparameter to be used by an algorithm.
type HyperParameterSpecification struct {
	DefaultValue *string           `json:"DefaultValue,omitempty"`
	Description  *string           `json:"Description,omitempty"`
	IsRequired   *bool             `json:"IsRequired,omitempty"`
	IsTunable    *bool             `json:"IsTunable,omitempty"`
	Name         string            `json:"Name"`
	Range        *ParameterRange   `json:"Range,omitempty"`
	Type         ParameterTypeEnum `json:"Type"`
}
