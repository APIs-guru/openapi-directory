package shared

type ListPagesByEngagementResult struct {
	NextToken *string `json:"NextToken"`
	Pages     []Page  `json:"Pages"`
}
