package shared

type GetInsightsResponse struct {
	Insights  []Insight `json:"Insights"`
	NextToken *string   `json:"NextToken"`
}
