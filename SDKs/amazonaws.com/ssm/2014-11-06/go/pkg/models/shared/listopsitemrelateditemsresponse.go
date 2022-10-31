package shared

type ListOpsItemRelatedItemsResponse struct {
	NextToken *string                     `json:"NextToken,omitempty"`
	Summaries []OpsItemRelatedItemSummary `json:"Summaries,omitempty"`
}
