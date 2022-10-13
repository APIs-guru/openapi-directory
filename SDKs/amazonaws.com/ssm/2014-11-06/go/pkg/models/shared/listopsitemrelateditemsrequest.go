package shared

type ListOpsItemRelatedItemsRequest struct {
	Filters    []OpsItemRelatedItemsFilter `json:"Filters"`
	MaxResults *int64                      `json:"MaxResults"`
	NextToken  *string                     `json:"NextToken"`
	OpsItemID  *string                     `json:"OpsItemId"`
}
