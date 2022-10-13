package shared

type DescribePatchGroupsRequest struct {
	Filters    []PatchOrchestratorFilter `json:"Filters"`
	MaxResults *int64                    `json:"MaxResults"`
	NextToken  *string                   `json:"NextToken"`
}
