package shared

type ListServicesResponse struct {
	NextToken *string       `json:"NextToken"`
	Services  []ServiceInfo `json:"Services"`
}
