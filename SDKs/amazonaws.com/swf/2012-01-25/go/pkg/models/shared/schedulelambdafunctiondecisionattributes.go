package shared

// ScheduleLambdaFunctionDecisionAttributes
// Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>.
type ScheduleLambdaFunctionDecisionAttributes struct {
	Control             *string `json:"control,omitempty"`
	ID                  string  `json:"id"`
	Input               *string `json:"input,omitempty"`
	Name                string  `json:"name"`
	StartToCloseTimeout *string `json:"startToCloseTimeout,omitempty"`
}
