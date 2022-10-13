package shared

type LifeCycleLastCutover struct {
	Finalized *LifeCycleLastCutoverFinalized `json:"finalized"`
	Initiated *LifeCycleLastCutoverInitiated `json:"initiated"`
	Reverted  *LifeCycleLastCutoverReverted  `json:"reverted"`
}
