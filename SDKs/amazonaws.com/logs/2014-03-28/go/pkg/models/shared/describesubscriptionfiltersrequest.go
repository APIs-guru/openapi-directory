package shared

type DescribeSubscriptionFiltersRequest struct {
	FilterNamePrefix *string `json:"filterNamePrefix,omitempty"`
	Limit            *int64  `json:"limit,omitempty"`
	LogGroupName     string  `json:"logGroupName"`
	NextToken        *string `json:"nextToken,omitempty"`
}
