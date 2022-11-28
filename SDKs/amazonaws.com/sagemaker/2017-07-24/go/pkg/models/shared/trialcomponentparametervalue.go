package shared

// TrialComponentParameterValue
// <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or <code>StringValue</code> can be specified.</p> <p>This object is specified in the <a>CreateTrialComponent</a> request.</p>
type TrialComponentParameterValue struct {
	NumberValue *float64 `json:"NumberValue,omitempty"`
	StringValue *string  `json:"StringValue,omitempty"`
}
