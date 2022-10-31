package shared

type OptimizationObjective struct {
	ItemAttribute        *string                   `json:"itemAttribute,omitempty"`
	ObjectiveSensitivity *ObjectiveSensitivityEnum `json:"objectiveSensitivity,omitempty"`
}
