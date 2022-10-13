package shared

type ListFleetsResponse struct {
	FleetSummaryList []FleetSummary `json:"FleetSummaryList"`
	NextToken        *string        `json:"NextToken"`
}
