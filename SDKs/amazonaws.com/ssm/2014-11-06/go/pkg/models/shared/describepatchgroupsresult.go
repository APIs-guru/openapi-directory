package shared

type DescribePatchGroupsResult struct {
	Mappings  []PatchGroupPatchBaselineMapping `json:"Mappings"`
	NextToken *string                          `json:"NextToken"`
}
