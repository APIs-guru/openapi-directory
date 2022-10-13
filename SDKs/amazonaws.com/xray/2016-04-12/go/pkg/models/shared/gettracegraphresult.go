package shared

type GetTraceGraphResult struct {
	NextToken *string   `json:"NextToken"`
	Services  []Service `json:"Services"`
}
