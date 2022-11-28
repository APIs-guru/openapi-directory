package shared

// HumanLoopActivationConditionsConfig
// Defines under what conditions SageMaker creates a human loop. Used within . See for the required format of activation conditions.
type HumanLoopActivationConditionsConfig struct {
	HumanLoopActivationConditions string `json:"HumanLoopActivationConditions"`
}
