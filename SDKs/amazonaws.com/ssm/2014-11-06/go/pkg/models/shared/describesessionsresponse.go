package shared

type DescribeSessionsResponse struct {
	NextToken *string   `json:"NextToken"`
	Sessions  []Session `json:"Sessions"`
}
