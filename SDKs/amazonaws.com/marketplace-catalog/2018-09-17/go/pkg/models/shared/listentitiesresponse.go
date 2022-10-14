package shared

type ListEntitiesResponse struct {
	EntitySummaryList []EntitySummary `json:"EntitySummaryList,omitempty"`
	NextToken         *string         `json:"NextToken,omitempty"`
}
