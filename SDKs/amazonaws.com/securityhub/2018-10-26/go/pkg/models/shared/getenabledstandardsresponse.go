package shared

type GetEnabledStandardsResponse struct {
	NextToken              *string                 `json:"NextToken,omitempty"`
	StandardsSubscriptions []StandardsSubscription `json:"StandardsSubscriptions,omitempty"`
}
