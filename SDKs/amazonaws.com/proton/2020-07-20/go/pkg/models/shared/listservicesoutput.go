package shared

type ListServicesOutput struct {
	NextToken *string          `json:"nextToken"`
	Services  []ServiceSummary `json:"services"`
}
