package shared

type DescribeSubscriptionFiltersRequest struct {
	FilterNamePrefix *string `json:"filterNamePrefix"`
	Limit            *int64  `json:"limit"`
	LogGroupName     string  `json:"logGroupName"`
	NextToken        *string `json:"nextToken"`
}
