package shared

type DescribeSubscriptionFiltersResponse struct {
	NextToken           *string              `json:"nextToken"`
	SubscriptionFilters []SubscriptionFilter `json:"subscriptionFilters"`
}
