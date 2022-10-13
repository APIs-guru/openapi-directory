package shared

type DescribeEventsResponse struct {
	Events    []Event `json:"Events"`
	NextToken *string `json:"NextToken"`
}
