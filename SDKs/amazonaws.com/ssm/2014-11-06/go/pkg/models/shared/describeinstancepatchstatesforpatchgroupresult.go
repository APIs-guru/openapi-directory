package shared

type DescribeInstancePatchStatesForPatchGroupResult struct {
	InstancePatchStates []InstancePatchState `json:"InstancePatchStates"`
	NextToken           *string              `json:"NextToken"`
}
