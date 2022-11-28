package shared

// OptimizationObjective
// Describes the additional objective for the solution, such as maximizing streaming minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.
type OptimizationObjective struct {
	ItemAttribute        *string                   `json:"itemAttribute,omitempty"`
	ObjectiveSensitivity *ObjectiveSensitivityEnum `json:"objectiveSensitivity,omitempty"`
}
