package shared

type DescribeEventsResponse struct {
	NextToken    *string       `json:"NextToken"`
	ServerEvents []ServerEvent `json:"ServerEvents"`
}
