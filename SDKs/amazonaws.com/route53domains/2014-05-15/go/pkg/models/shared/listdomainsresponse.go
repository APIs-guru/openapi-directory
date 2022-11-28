package shared

// ListDomainsResponse
// The ListDomains response includes the following elements.
type ListDomainsResponse struct {
	Domains        []DomainSummary `json:"Domains"`
	NextPageMarker *string         `json:"NextPageMarker,omitempty"`
}
