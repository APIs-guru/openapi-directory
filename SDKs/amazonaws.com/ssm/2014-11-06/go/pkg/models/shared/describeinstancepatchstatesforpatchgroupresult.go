package shared

type DescribeInstancePatchStatesForPatchGroupResult struct {
	InstancePatchStates []InstancePatchState `json:"InstancePatchStates,omitempty"`
	NextToken           *string              `json:"NextToken,omitempty"`
}
