package shared

type DescribeInstancePatchesRequest struct {
	Filters    []PatchOrchestratorFilter `json:"Filters"`
	InstanceID string                    `json:"InstanceId"`
	MaxResults *int64                    `json:"MaxResults"`
	NextToken  *string                   `json:"NextToken"`
}
