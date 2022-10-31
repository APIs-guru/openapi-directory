package shared



type DescribeEffectivePatchesForPatchBaselineResult struct {
    EffectivePatches []EffectivePatch `json:"EffectivePatches,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

