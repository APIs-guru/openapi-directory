package shared

// IntegerParameterRange
// For a hyperparameter of the integer type, specifies the range that a hyperparameter tuning job searches.
type IntegerParameterRange struct {
	MaxValue    string                         `json:"MaxValue"`
	MinValue    string                         `json:"MinValue"`
	Name        string                         `json:"Name"`
	ScalingType *HyperParameterScalingTypeEnum `json:"ScalingType,omitempty"`
}
