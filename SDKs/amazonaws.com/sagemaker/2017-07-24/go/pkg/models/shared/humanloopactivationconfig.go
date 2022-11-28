package shared

// HumanLoopActivationConfig
// Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans.
type HumanLoopActivationConfig struct {
	HumanLoopActivationConditionsConfig HumanLoopActivationConditionsConfig `json:"HumanLoopActivationConditionsConfig"`
}
