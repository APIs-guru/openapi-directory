package shared



type DescribePatchBaselinesResult struct {
    BaselineIdentities []PatchBaselineIdentity `json:"BaselineIdentities,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

