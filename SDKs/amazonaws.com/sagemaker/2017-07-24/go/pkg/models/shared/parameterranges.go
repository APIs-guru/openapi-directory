package shared

// ParameterRanges
// <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.</p> <note> <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job can search over. Every possible value of a categorical parameter range counts against this limit.</p> </note>
type ParameterRanges struct {
	CategoricalParameterRanges []CategoricalParameterRange `json:"CategoricalParameterRanges,omitempty"`
	ContinuousParameterRanges  []ContinuousParameterRange  `json:"ContinuousParameterRanges,omitempty"`
	IntegerParameterRanges     []IntegerParameterRange     `json:"IntegerParameterRanges,omitempty"`
}
