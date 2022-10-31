package shared



type DescribeSubscriptionFiltersResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    SubscriptionFilters []SubscriptionFilter `json:"subscriptionFilters,omitempty"`
    
}

