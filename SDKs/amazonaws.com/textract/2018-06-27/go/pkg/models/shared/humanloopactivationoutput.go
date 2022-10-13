package shared

type HumanLoopActivationOutput struct {
	HumanLoopActivationConditionsEvaluationResults *string  `json:"HumanLoopActivationConditionsEvaluationResults"`
	HumanLoopActivationReasons                     []string `json:"HumanLoopActivationReasons"`
	HumanLoopArn                                   *string  `json:"HumanLoopArn"`
}
