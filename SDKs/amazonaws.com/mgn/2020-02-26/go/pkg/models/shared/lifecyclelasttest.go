package shared



type LifeCycleLastTest struct {
    Finalized *LifeCycleLastTestFinalized `json:"finalized,omitempty"`
    Initiated *LifeCycleLastTestInitiated `json:"initiated,omitempty"`
    Reverted *LifeCycleLastTestReverted `json:"reverted,omitempty"`
    
}

