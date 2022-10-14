package shared

type LifeCycleLastCutover struct {
	Finalized *LifeCycleLastCutoverFinalized `json:"finalized,omitempty"`
	Initiated *LifeCycleLastCutoverInitiated `json:"initiated,omitempty"`
	Reverted  *LifeCycleLastCutoverReverted  `json:"reverted,omitempty"`
}
