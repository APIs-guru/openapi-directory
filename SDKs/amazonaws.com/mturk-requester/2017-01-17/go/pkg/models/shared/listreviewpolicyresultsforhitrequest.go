package shared

type ListReviewPolicyResultsForHitRequest struct {
	HitID           string                  `json:"HITId"`
	MaxResults      *int64                  `json:"MaxResults"`
	NextToken       *string                 `json:"NextToken"`
	PolicyLevels    []ReviewPolicyLevelEnum `json:"PolicyLevels"`
	RetrieveActions *bool                   `json:"RetrieveActions"`
	RetrieveResults *bool                   `json:"RetrieveResults"`
}
