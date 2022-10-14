package shared

type DescribeInstancePatchStatesResult struct {
	InstancePatchStates []InstancePatchState `json:"InstancePatchStates,omitempty"`
	NextToken           *string              `json:"NextToken,omitempty"`
}
