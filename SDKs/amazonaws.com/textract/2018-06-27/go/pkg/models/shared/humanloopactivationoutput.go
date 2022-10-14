package shared

type HumanLoopActivationOutput struct {
	HumanLoopActivationConditionsEvaluationResults *string  `json:"HumanLoopActivationConditionsEvaluationResults,omitempty"`
	HumanLoopActivationReasons                     []string `json:"HumanLoopActivationReasons,omitempty"`
	HumanLoopArn                                   *string  `json:"HumanLoopArn,omitempty"`
}
