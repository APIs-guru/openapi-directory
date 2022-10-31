package shared



type DescribePatchGroupsResult struct {
    Mappings []PatchGroupPatchBaselineMapping `json:"Mappings,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

