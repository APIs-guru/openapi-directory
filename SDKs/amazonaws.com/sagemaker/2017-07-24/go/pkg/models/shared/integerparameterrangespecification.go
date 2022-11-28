package shared

// IntegerParameterRangeSpecification
// Defines the possible values for an integer hyperparameter.
type IntegerParameterRangeSpecification struct {
	MaxValue string `json:"MaxValue"`
	MinValue string `json:"MinValue"`
}
