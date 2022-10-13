package shared

type ListPagesByEngagementRequest struct {
	EngagementID string  `json:"EngagementId"`
	MaxResults   *int64  `json:"MaxResults"`
	NextToken    *string `json:"NextToken"`
}
