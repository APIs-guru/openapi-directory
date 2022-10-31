package shared

type DescribeServiceUpdatesResponse struct {
	NextToken      *string         `json:"NextToken,omitempty"`
	ServiceUpdates []ServiceUpdate `json:"ServiceUpdates,omitempty"`
}
