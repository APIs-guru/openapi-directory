package shared

type DescribeInstancePatchStatesForPatchGroupRequest struct {
	Filters    []InstancePatchStateFilter `json:"Filters"`
	MaxResults *int64                     `json:"MaxResults"`
	NextToken  *string                    `json:"NextToken"`
	PatchGroup string                     `json:"PatchGroup"`
}
