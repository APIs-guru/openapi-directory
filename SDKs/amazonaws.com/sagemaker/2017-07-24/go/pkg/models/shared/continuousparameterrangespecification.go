package shared

// ContinuousParameterRangeSpecification
// Defines the possible values for a continuous hyperparameter.
type ContinuousParameterRangeSpecification struct {
	MaxValue string `json:"MaxValue"`
	MinValue string `json:"MinValue"`
}
