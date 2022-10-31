package shared



type DescribeInstancePatchStatesForPatchGroupRequest struct {
    Filters []InstancePatchStateFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    PatchGroup string `json:"PatchGroup"`
    
}

