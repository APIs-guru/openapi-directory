package shared

type ListOpsItemRelatedItemsResponse struct {
	NextToken *string                     `json:"NextToken"`
	Summaries []OpsItemRelatedItemSummary `json:"Summaries"`
}
