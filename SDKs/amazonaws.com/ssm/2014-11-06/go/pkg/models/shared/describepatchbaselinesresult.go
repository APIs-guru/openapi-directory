package shared

type DescribePatchBaselinesResult struct {
	BaselineIdentities []PatchBaselineIdentity `json:"BaselineIdentities"`
	NextToken          *string                 `json:"NextToken"`
}
