package shared

type ListServicesResponse struct {
	NextToken *string          `json:"NextToken"`
	Services  []ServiceSummary `json:"Services"`
}
