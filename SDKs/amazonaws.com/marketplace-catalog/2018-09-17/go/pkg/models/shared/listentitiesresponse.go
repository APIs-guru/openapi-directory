package shared

type ListEntitiesResponse struct {
	EntitySummaryList []EntitySummary `json:"EntitySummaryList"`
	NextToken         *string         `json:"NextToken"`
}
