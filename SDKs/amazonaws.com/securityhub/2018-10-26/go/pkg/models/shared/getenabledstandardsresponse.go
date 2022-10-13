package shared

type GetEnabledStandardsResponse struct {
	NextToken              *string                 `json:"NextToken"`
	StandardsSubscriptions []StandardsSubscription `json:"StandardsSubscriptions"`
}
