package shared

type DescribeOpsItemsResponse struct {
	NextToken        *string          `json:"NextToken"`
	OpsItemSummaries []OpsItemSummary `json:"OpsItemSummaries"`
}
