package shared

type ListReviewPolicyResultsForHitRequest struct {
	HitID           string                  `json:"HITId"`
	MaxResults      *int64                  `json:"MaxResults,omitempty"`
	NextToken       *string                 `json:"NextToken,omitempty"`
	PolicyLevels    []ReviewPolicyLevelEnum `json:"PolicyLevels,omitempty"`
	RetrieveActions *bool                   `json:"RetrieveActions,omitempty"`
	RetrieveResults *bool                   `json:"RetrieveResults,omitempty"`
}
