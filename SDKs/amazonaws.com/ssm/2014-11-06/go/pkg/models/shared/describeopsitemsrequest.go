package shared

type DescribeOpsItemsRequest struct {
	MaxResults     *int64          `json:"MaxResults"`
	NextToken      *string         `json:"NextToken"`
	OpsItemFilters []OpsItemFilter `json:"OpsItemFilters"`
}
