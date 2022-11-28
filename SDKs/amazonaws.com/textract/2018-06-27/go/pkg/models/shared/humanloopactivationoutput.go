package shared

// HumanLoopActivationOutput
// Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review.
type HumanLoopActivationOutput struct {
	HumanLoopActivationConditionsEvaluationResults *string  `json:"HumanLoopActivationConditionsEvaluationResults,omitempty"`
	HumanLoopActivationReasons                     []string `json:"HumanLoopActivationReasons,omitempty"`
	HumanLoopArn                                   *string  `json:"HumanLoopArn,omitempty"`
}
