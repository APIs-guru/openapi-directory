package shared

type DescribeOpsItemsResponse struct {
	NextToken        *string          `json:"NextToken,omitempty"`
	OpsItemSummaries []OpsItemSummary `json:"OpsItemSummaries,omitempty"`
}
