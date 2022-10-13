package shared

type DescribeServiceUpdatesResponse struct {
	NextToken      *string         `json:"NextToken"`
	ServiceUpdates []ServiceUpdate `json:"ServiceUpdates"`
}
