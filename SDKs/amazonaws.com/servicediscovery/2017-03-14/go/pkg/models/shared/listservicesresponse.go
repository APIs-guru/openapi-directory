package shared

type ListServicesResponse struct {
	NextToken *string          `json:"NextToken,omitempty"`
	Services  []ServiceSummary `json:"Services,omitempty"`
}
