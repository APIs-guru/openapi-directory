package shared

type OptimizationObjective struct {
	ItemAttribute        *string                   `json:"itemAttribute"`
	ObjectiveSensitivity *ObjectiveSensitivityEnum `json:"objectiveSensitivity"`
}
