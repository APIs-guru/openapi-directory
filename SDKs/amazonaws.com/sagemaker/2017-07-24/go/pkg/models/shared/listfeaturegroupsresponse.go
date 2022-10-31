package shared

type ListFeatureGroupsResponse struct {
	FeatureGroupSummaries []FeatureGroupSummary `json:"FeatureGroupSummaries"`
	NextToken             string                `json:"NextToken"`
}
