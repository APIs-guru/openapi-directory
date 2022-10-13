package shared

type DescribeInstancePatchStatesResult struct {
	InstancePatchStates []InstancePatchState `json:"InstancePatchStates"`
	NextToken           *string              `json:"NextToken"`
}
