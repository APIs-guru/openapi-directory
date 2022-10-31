package shared

type DescribeInstancePatchesRequest struct {
	Filters    []PatchOrchestratorFilter `json:"Filters,omitempty"`
	InstanceID string                    `json:"InstanceId"`
	MaxResults *int64                    `json:"MaxResults,omitempty"`
	NextToken  *string                   `json:"NextToken,omitempty"`
}
