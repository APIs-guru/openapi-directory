package shared

type LifeCycleLastTest struct {
	Finalized *LifeCycleLastTestFinalized `json:"finalized"`
	Initiated *LifeCycleLastTestInitiated `json:"initiated"`
	Reverted  *LifeCycleLastTestReverted  `json:"reverted"`
}
