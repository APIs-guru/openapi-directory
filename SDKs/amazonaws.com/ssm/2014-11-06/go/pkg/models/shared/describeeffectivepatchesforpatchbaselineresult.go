package shared

type DescribeEffectivePatchesForPatchBaselineResult struct {
	EffectivePatches []EffectivePatch `json:"EffectivePatches"`
	NextToken        *string          `json:"NextToken"`
}
