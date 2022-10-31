package shared



type DescribeEffectivePatchesForPatchBaselineRequest struct {
    BaselineID string `json:"BaselineId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

