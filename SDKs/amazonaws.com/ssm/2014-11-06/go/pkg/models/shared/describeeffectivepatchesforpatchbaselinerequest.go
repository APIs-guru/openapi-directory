package shared

type DescribeEffectivePatchesForPatchBaselineRequest struct {
	BaselineID string  `json:"BaselineId"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
