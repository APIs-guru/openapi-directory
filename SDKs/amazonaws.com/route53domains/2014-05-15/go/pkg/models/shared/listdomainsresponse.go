package shared

type ListDomainsResponse struct {
	Domains        []DomainSummary `json:"Domains"`
	NextPageMarker *string         `json:"NextPageMarker,omitempty"`
}
